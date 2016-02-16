#import <UIKit/UIKit.h>
#import <SDWebImage/SDWebImageManager.h>

@interface UIImageView (AsyncImageLoading)

- (void)ar_setImageWithURL:(NSURL *)url;

- (void)ar_setImageWithURL:(NSURL *)url completed:(SDWebImageCompletionBlock)completed;

- (void)ar_setImageWithURL:(NSURL *)url placeholderImage:(UIImage *)placeholder;

@end
