//
//  ARArtworkMasonryGridComponentCell.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponentCell.h"

static NSTextStorage *
CreateTextStorage(CGFloat width, NSUInteger numberOfLines) {
    NSLayoutManager *layoutManager = [NSLayoutManager new];
    NSTextStorage *textStorage = [NSTextStorage new];
    [textStorage addLayoutManager:layoutManager];
    
    NSTextContainer *textContainer = [NSTextContainer new];
    textContainer.lineFragmentPadding = 0.0;
    textContainer.lineBreakMode = numberOfLines > 0 ? NSLineBreakByTruncatingTail : NSLineBreakByWordWrapping;
    textContainer.maximumNumberOfLines = numberOfLines;
    textContainer.size = (CGSize){isnan(width) ? CGFLOAT_MAX : width, CGFLOAT_MAX};
    
    [layoutManager addTextContainer:textContainer];
    [layoutManager ensureLayoutForTextContainer:textContainer];
    
    return textStorage;
}

// TODO Extract font definition, for now uses the system default.
static CGFloat
HeightForString(NSTextStorage *textStorage, NSString *string) {
    NSAttributedString *attributedString = [[NSAttributedString alloc] initWithString:string attributes:@{ NSFontAttributeName: [UIFont systemFontOfSize:17] }];

    [textStorage replaceCharactersInRange:NSMakeRange(0, textStorage.length) withAttributedString:attributedString];
    NSLayoutManager *layoutManager = textStorage.layoutManagers.firstObject;
    NSTextContainer *textContainer = layoutManager.textContainers.firstObject;
    CGSize computedSize = [layoutManager usedRectForTextContainer:textContainer].size;
    return computedSize.height;
}

static id
ValueOrNil(id value) {
    return value != nil && value != [NSNull null] ? value : nil;
}

@interface ARArtworksMasonryGridComponentCell ()
@property (nonatomic, strong) UIView *imageView;
@property (nonatomic, strong) UILabel *artistNameLabel;
@property (nonatomic, strong) UILabel *titleLabel;
@end

@implementation ARArtworksMasonryGridComponentCell

+ (void)calculateFrames:(ARArtworksMasonryGridComponentCellFrames *)cellFrames
             forArtwork:(NSDictionary *)artwork
              withWidth:(CGFloat)width;
{
    float aspectRatio = [(ValueOrNil(artwork[@"image"][@"aspect_ratio"]) ?: @(1)) floatValue];
    cellFrames->imageView = CGRectMake(0, 0, ceilf(width), ceilf(width / aspectRatio));
    cellFrames->totalHeight = CGRectGetHeight(cellFrames->imageView);

    // TODO are there labels that we want to truncate?
    NSTextStorage *textStorage = CreateTextStorage(width, 0);

    cellFrames->artistNameLabel = CGRectMake(0, cellFrames->totalHeight, width, HeightForString(textStorage, artwork[@"artist"][@"name"]));
    cellFrames->totalHeight += CGRectGetHeight(cellFrames->artistNameLabel);

    NSString *title = ValueOrNil(artwork[@"title"]);
    if (title) {
        cellFrames->titleLabel = CGRectMake(0, cellFrames->totalHeight, width, HeightForString(textStorage, title));
        cellFrames->totalHeight += CGRectGetHeight(cellFrames->titleLabel);
    }
}

- (instancetype)initWithFrame:(CGRect)frame;
{
    if ((self = [super initWithFrame:frame])) {
        _imageView = [UIView new];
        _imageView.backgroundColor = [UIColor redColor];
        [self.contentView addSubview:_imageView];
        
        _artistNameLabel = [UILabel new];
        _artistNameLabel.numberOfLines = 0;
        _artistNameLabel.lineBreakMode = NSLineBreakByWordWrapping;
        _artistNameLabel.backgroundColor = [UIColor grayColor];
        [self.contentView addSubview:_artistNameLabel];

        _titleLabel = [UILabel new];
        _titleLabel.numberOfLines = 0;
        _titleLabel.lineBreakMode = NSLineBreakByWordWrapping;
        _titleLabel.backgroundColor = [UIColor grayColor];
        [self.contentView addSubview:_titleLabel];
    }
    return self;
}

- (void)configureWithArtwork:(NSDictionary *)artwork frames:(ARArtworksMasonryGridComponentCellFrames *)cellFrames;
{
    self.imageView.frame = cellFrames->imageView;
    self.artistNameLabel.frame = cellFrames->artistNameLabel;
    self.titleLabel.frame = cellFrames->titleLabel;
    
    self.artistNameLabel.text = artwork[@"artist"][@"name"];
    
    // TODO hide label if nil?
    NSString *title = ValueOrNil(artwork[@"title"]);
    self.titleLabel.text = title;
}

@end
