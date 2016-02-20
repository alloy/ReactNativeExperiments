#import "UIImageView+AsyncImageLoading.h"

@interface ARImageView : UIImageView
@property (nonatomic, copy) NSString *source;
@property (nonatomic, assign) BOOL loadImage;
@end