#import "ARImageView.h"

@implementation ARImageView

- (void)setSource:(NSString *)source;
{
    if (![_source isEqual:source]) {
        _source = source;
        [self ar_setImageWithURL:[NSURL URLWithString:_source]];
    }
}

@end
