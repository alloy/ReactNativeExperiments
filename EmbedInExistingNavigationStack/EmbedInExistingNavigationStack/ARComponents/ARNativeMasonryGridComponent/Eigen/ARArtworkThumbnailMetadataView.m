#import "ARArtworkThumbnailMetadataView.h"

#import "Artist.h"
#import "Artwork.h"
//#import "ARFonts.h"

#import "UIDevice-Hardware.h"

//#import <ObjectiveSugar/ObjectiveSugar.h>

static CGFloat ARMetadataFontSize;


@interface ARArtworkThumbnailMetadataView ()

@property (nonatomic, strong) UILabel *primaryLabel;
@property (nonatomic, strong) UILabel *secondaryLabel;
@property (nonatomic, strong) UILabel *priceLabel;

@end


@implementation ARArtworkThumbnailMetadataView

+ (void)initialize
{
    [super initialize];
    ARMetadataFontSize = [UIDevice isPad] ? 15 : 12;
}

+ (CGFloat)heightForMargin
{
    return 8;
}

- (instancetype)init
{
    self = [super init];
    if (!self) {
        return nil;
    }
    
    _primaryLabel = [[UILabel alloc] init];
    _secondaryLabel = [[UILabel alloc] init];
//    _secondaryLabel.lineHeight = 1;
    _secondaryLabel.numberOfLines = 1;
    _priceLabel = [[UILabel alloc] init];
    
    for (UILabel *label in @[ self.primaryLabel, self.secondaryLabel, self.priceLabel ]) {
        label.font = [label.font fontWithSize:ARMetadataFontSize];
        label.textColor = [UIColor grayColor];
        [self addSubview:label];
    };
    
    return self;
}

- (CGSize)intrinsicContentSize
{
    return (CGSize){UIViewNoIntrinsicMetric, self.frame.size.height};
}

- (void)layoutSubviews
{
    [super layoutSubviews];
    
    CGRect labelFrame = self.bounds;
    
    if (self.showPrice) {
        labelFrame.size.height /= 3;
        
        self.primaryLabel.frame = labelFrame;
        labelFrame.origin.y = labelFrame.size.height;
        self.secondaryLabel.frame = labelFrame;
        labelFrame.origin.y += labelFrame.size.height;
        self.priceLabel.frame = labelFrame;
        
    } else {
        labelFrame.size.height /= 2;
        
        self.primaryLabel.frame = labelFrame;
        labelFrame.origin.y = labelFrame.size.height;
        self.secondaryLabel.frame = labelFrame;
    }
}

- (void)configureWithArtwork:(Artwork *)artwork showPriceLabel:(BOOL)showPrice
{
    self.primaryLabel.text = artwork.artist.name;
//    [self.secondaryLabel setTitle:artwork.title date:artwork.date];
    [self.secondaryLabel setText:artwork.title];
    
    if (showPrice) {
//        self.priceLabel.text = artwork.price;
        self.priceLabel.text = artwork.saleMessage;
    }
    self.showPrice = showPrice;
}

- (void)resetLabels
{
    self.primaryLabel.text = nil;
//    [self.secondaryLabel setTitle:nil date:nil];
    self.secondaryLabel.text = nil;
    self.priceLabel.text = nil;
}

@end