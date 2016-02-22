//
//  ARArtworksMasonryShadowGrid.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 22/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryShadowGrid.h"
#import "ARArtworksMasonryGridComponent.h"

#import "ARArtworksMasonryGridComponentController.h"
#import <ARCollectionViewMasonryLayout/ARCollectionViewMasonryLayout.h>

#import <React/RCTUIManager.h>

#import <React/RCTUtils.h>

@interface ARArtworksMasonryShadowGrid ()
@property (nonatomic, strong) ARArtworksMasonryGridComponentController *controller;
@end

// This is only called if the view has to determine its own height, which does not happen when:
// * An explicit style height is set
// * A style like `flex: 1` is set
//
static css_dim_t RCTMeasure(void *context, float width, float height)
{
    ARArtworksMasonryShadowGrid *shadowGrid = (__bridge ARArtworksMasonryShadowGrid *)context;
    UICollectionView *collectionView = shadowGrid.controller.collectionView;
    UICollectionViewLayout *layout = collectionView.collectionViewLayout;
    
    CGRect frame = collectionView.frame;
    frame.size.width = width;
    collectionView.frame = frame;
    [layout prepareLayout];
    CGSize size = layout.collectionViewContentSize;

    css_dim_t result;
    if (width != NAN) {
        result.dimensions[CSS_WIDTH] = size.width;
        result.dimensions[CSS_HEIGHT] = size.height;
    } else {
        NSCAssert(NO, @"TODO when does this happen?");
    }

    return result;
}

@implementation ARArtworksMasonryShadowGrid

- (instancetype)init;
{
    if ((self = [super init])) {
        _controller = [ARArtworksMasonryGridComponentController new];
    }
    return self;
}

- (void)setArtworks:(NSArray<NSDictionary *> *)artworks;
{
    _artworks = artworks;
    self.controller.artworks = artworks;
}

- (void)fillCSSNode:(css_node_t *)node
{
    [super fillCSSNode:node];
    node->measure = RCTMeasure;
}

- (NSDictionary<NSString *, id> *)processUpdatedProperties:(NSMutableSet<RCTApplierBlock> *)applierBlocks
                                          parentProperties:(NSDictionary<NSString *, id> *)parentProperties
{
    parentProperties = [super processUpdatedProperties:applierBlocks
                                      parentProperties:parentProperties];
    
    [applierBlocks addObject:^(NSDictionary<NSNumber *, ARArtworksMasonryGridComponent *> *viewRegistry) {
        ARArtworksMasonryGridComponent *view = viewRegistry[self.reactTag];
        view.controller = self.controller;
    }];

    return parentProperties;
}

@end
