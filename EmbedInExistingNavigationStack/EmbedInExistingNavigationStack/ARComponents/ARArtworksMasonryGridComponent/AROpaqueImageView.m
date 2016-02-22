//
//  AROpaqueImageView.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 21/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "AROpaqueImageView.h"

#import <SDWebImage/SDImageCache.h>
#import <SDWebImage/SDWebImageManager.h>

static void
LoadImage(UIImage *image, CGSize destinationSize, CGFloat scaleFactor, void (^callback)(UIImage *loadedImage)) {
    dispatch_async(dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0), ^{
        CGFloat width = destinationSize.width * scaleFactor;
        CGFloat height = destinationSize.height * scaleFactor;

        CGColorSpaceRef colourSpace = CGColorSpaceCreateDeviceRGB();
        CGContextRef context = CGBitmapContextCreate(NULL,
                                                     width,
                                                     height,
                                                     8,
                                                     width * 4,
                                                     colourSpace,
                                                     kCGImageAlphaPremultipliedFirst | kCGBitmapByteOrder32Host);
        CGColorSpaceRelease(colourSpace);

        CGContextDrawImage(context, CGRectMake(0, 0, width, height), image.CGImage);

        CGImageRef outputImage = CGBitmapContextCreateImage(context);
        UIImage *loadedImage = [UIImage imageWithCGImage:outputImage
                                                   scale:scaleFactor
                                             orientation:UIImageOrientationUp];

        CGImageRelease(outputImage);
        CGContextRelease(context);

        dispatch_async(dispatch_get_main_queue(), ^{
            callback(loadedImage);
        });
    });
}

@interface AROpaqueImageView ()
@property (nonatomic, strong) NSURL *imageURL;
@property (nonatomic, weak) id<SDWebImageOperation> downloadOperation;
@end

@implementation AROpaqueImageView

- (instancetype)initWithFrame:(CGRect)frame;
{
    if ((self = [super initWithFrame:frame])) {
        self.layer.opaque = YES;
    }
    return self;
}

- (void)loadImageFromURL:(NSURL *)imageURL;
{
    self.imageURL = imageURL;
}

- (void)setImageURL:(NSURL *)imageURL;
{
    if (![_imageURL isEqual:imageURL]) {
        // This is a weak reference, so either an operation is in-flight and
        // needs cancelling, or it will be nil and this is a no-op.
        [self.downloadOperation cancel];

        _imageURL = imageURL;
        if (_imageURL == nil) {
            return;
        }

        // TODO Setting decompress to NO, because Eigen sets it to YES.
        //      We need to send a PR to SDWebImage to disable decoding
        //      with an option to the download method.
        //
        SDWebImageManager *manager = [SDWebImageManager sharedManager];
        manager.imageCache.shouldDecompressImages = NO;
        manager.imageDownloader.shouldDecompressImages = NO;

        __weak typeof(self) weakSelf = self;
        self.downloadOperation = [manager downloadImageWithURL:self.imageURL
                                                       options:0
                                                      progress:nil
                                                     completed:^(UIImage *image,
                                                                 NSError *_,
                                                                 SDImageCacheType __,
                                                                 BOOL ____,
                                                                 NSURL *imageURL) {
            __strong typeof(weakSelf) strongSelf = weakSelf;
            // Only really assign if the URL we downloaded still matches `self.imageURL`.
            if (strongSelf && [imageURL isEqual:strongSelf.imageURL]) {
                LoadImage(image, strongSelf.bounds.size, strongSelf.contentScaleFactor, ^(UIImage *loadedImage) {
                    if ([imageURL isEqual:weakSelf.imageURL]) {
                        weakSelf.image = loadedImage;
                    }
                });
            }
        }];
    }
}

- (void)setImage:(UIImage *)image;
{
    NSAssert([NSThread isMainThread], @"Should be called from the main thread.");
    
    // This will cancel an in-flight download operation, if one exists.
    self.imageURL = nil;
    
    if (_image != image) {
        _image = image;
        self.layer.contents = (id)image.CGImage;
    }
}

@end
