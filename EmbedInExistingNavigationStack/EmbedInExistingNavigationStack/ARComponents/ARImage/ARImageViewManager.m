#import "ARImageViewManager.h"
#import "ARImageView.h"

@implementation ARImageViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [ARImageView new];
}


RCT_EXPORT_VIEW_PROPERTY(source, NSString)

@end
