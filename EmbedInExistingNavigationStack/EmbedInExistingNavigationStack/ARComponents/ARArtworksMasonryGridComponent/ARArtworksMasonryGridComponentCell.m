//
//  ARArtworkMasonryGridComponentCell.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponentCell.h"

#import "AROpaqueImageView.h"
//#import "UIImageView+AsyncImageLoading.h"

static id
ValueOrNil(id value) {
    return value != nil && value != [NSNull null] ? value : nil;
}

@interface ARArtworksMasonryGridComponentCell ()
@property (nonatomic, assign) ARArtworksMasonryGridComponentCellFrames cellFrames;
@property (nonatomic, strong) AROpaqueImageView *imageView;
@property (nonatomic, strong) NSAttributedString *artistName;
@property (nonatomic, strong) NSAttributedString *artworkTitle;
@end

#pragma mark - Attributed Strings

static NSAttributedString *
ArtistNameAttributedString(NSString *name) {
    NSCParameterAssert(name);
    return [[NSAttributedString alloc] initWithString:name attributes:@{
        NSFontAttributeName: [UIFont systemFontOfSize:17],
        NSForegroundColorAttributeName: [UIColor blackColor],
    }];
}

static NSAttributedString *
ArtworkTitleAttributedString(NSString *title) {
    NSCParameterAssert(title);
    return [[NSAttributedString alloc] initWithString:title attributes:@{
        NSFontAttributeName: [UIFont systemFontOfSize:17],
        NSForegroundColorAttributeName: [UIColor blackColor],
    }];
}

#pragma mark - Frame Calculations

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

static CGFloat
HeightForString(NSTextStorage *textStorage, NSAttributedString *attributedString) {
    [textStorage replaceCharactersInRange:NSMakeRange(0, textStorage.length) withAttributedString:attributedString];
    NSLayoutManager *layoutManager = textStorage.layoutManagers.firstObject;
    NSTextContainer *textContainer = layoutManager.textContainers.firstObject;
    CGSize computedSize = [layoutManager usedRectForTextContainer:textContainer].size;
    return computedSize.height;
}

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

    cellFrames->artistNameLabel = CGRectMake(0, cellFrames->totalHeight, width, HeightForString(textStorage, ArtistNameAttributedString(artwork[@"artist"][@"name"])));
    cellFrames->totalHeight += CGRectGetHeight(cellFrames->artistNameLabel);

    NSString *title = ValueOrNil(artwork[@"title"]);
    if (title) {
        cellFrames->titleLabel = CGRectMake(0, cellFrames->totalHeight, width, HeightForString(textStorage, ArtworkTitleAttributedString(title)));
        cellFrames->totalHeight += CGRectGetHeight(cellFrames->titleLabel);
    }
}

#pragma mark - Cell Instance

- (instancetype)initWithFrame:(CGRect)frame;
{
    if ((self = [super initWithFrame:frame])) {
        self.backgroundColor = [UIColor whiteColor];

        _imageView = [AROpaqueImageView new];
        _imageView.backgroundColor = [UIColor grayColor];
        [self.contentView addSubview:_imageView];
    }
    return self;
}

- (void)prepareForReuse;
{
    [super prepareForReuse];
    
    // Clearing out the image and imageURL on the imageView would only lead to
    // unnecessary drawing of blank images.
    self.imageView.image = nil;
    self.artistName = nil;
    self.artworkTitle = nil;
}

- (void)configureWithArtwork:(NSDictionary *)artwork frames:(ARArtworksMasonryGridComponentCellFrames *)cellFrames;
{
    self.cellFrames = *cellFrames;

    self.imageView.frame = cellFrames->imageView;
    [self.imageView loadImageFromURL:[NSURL URLWithString:artwork[@"image"][@"url"]]];

    self.artistName = ArtworkTitleAttributedString(artwork[@"artist"][@"name"]);

    NSString *title = ValueOrNil(artwork[@"title"]);
    self.artworkTitle = title ? ArtworkTitleAttributedString(title) : nil;
    
    [self setNeedsDisplay];
}

- (void)drawRect:(CGRect)rect;
{
    // Clear the background after re-use
    [[UIColor whiteColor] setFill];
    CGContextFillRect(UIGraphicsGetCurrentContext(), rect);

    ARArtworksMasonryGridComponentCellFrames cellFrames = self.cellFrames;

    [self.artistName drawWithRect:cellFrames.artistNameLabel
                          options:NSStringDrawingUsesLineFragmentOrigin
                          context:nil];

    [self.artworkTitle drawWithRect:cellFrames.titleLabel
                            options:NSStringDrawingUsesLineFragmentOrigin
                            context:nil];
}

@end
