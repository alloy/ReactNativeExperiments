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

@implementation AROpaqueImageView

- (void)setImage:(UIImage *)image;
{
    NSAssert([NSThread isMainThread], @"Should be called from the main thread.");
    if (_image != image) {
        _image = image;
        [self setNeedsDisplay];
    }
}

- (void)setImageURL:(NSURL *)imageURL;
{
    if (![_imageURL isEqual:imageURL]) {
        _imageURL = imageURL;

        // TODO Setting decompress to YES, because Eigen sets it to NO during Spotlight
        //      data importing. We need to send a PR to SDWebImage to disable decoding
        //      with an option to the download method.
        //
        SDWebImageManager *manager = [SDWebImageManager sharedManager];
        manager.imageCache.shouldDecompressImages = YES;
        manager.imageDownloader.shouldDecompressImages = YES;

        __weak typeof(self) weakSelf = self;
        [manager downloadImageWithURL:self.imageURL
                              options:0
                             progress:nil
                            completed:^(UIImage *image, NSError *_, SDImageCacheType __, BOOL ____, NSURL *imageURL) {
            __strong typeof(weakSelf) strongSelf = weakSelf;
            // Only really assign if the URL we downloaded still matches `self.imageURL`.
            if (strongSelf && [imageURL isEqual:strongSelf.imageURL]) {
                strongSelf.image = image;
            }
        }];
    }
}

- (void)drawRect:(CGRect)rect;
{
    if (self.image) {
        [self.image drawInRect:self.bounds];
    } else {
        [[UIColor grayColor] setFill];
        CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
    }
}

@end
