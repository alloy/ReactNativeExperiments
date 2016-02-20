#import "ARImageViewManager.h"
#import "ARImageView.h"
#import "ARShadowImageView.h"

@implementation ARImageViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [ARImageView new];
}

- (RCTShadowView *)shadowView
{
    return [ARShadowImageView new];
}

RCT_EXPORT_VIEW_PROPERTY(source, NSString)
RCT_EXPORT_VIEW_PROPERTY(loadImage, BOOL)
RCT_EXPORT_SHADOW_PROPERTY(aspectRatio, float)

@end
