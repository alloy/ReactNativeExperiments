#import "ARImageView.h"

// TODO This load or not to load implementation is finicky.

@implementation ARImageView

- (instancetype)init;
{
    if ((self = [super init])) {
        _loadImage = YES;
    }
    return self;
}

- (void)setSource:(NSString *)source;
{
    if (![_source isEqual:source]) {
        _source = source;
        if (self.loadImage) {
            [self ar_setImageWithURL:[NSURL URLWithString:_source]];
        }
    }
}

- (void)setLoadImage:(BOOL)loadImage;
{
    _loadImage = loadImage;
    if (loadImage) {
        [self ar_setImageWithURL:[NSURL URLWithString:self.source]];
    } else {
        self.image = nil;
    }
}

@end
