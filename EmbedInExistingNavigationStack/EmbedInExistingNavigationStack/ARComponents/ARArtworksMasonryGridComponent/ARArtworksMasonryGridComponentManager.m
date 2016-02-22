//
//  ARArtworksMasonryGridViewManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponentManager.h"
#import "ARArtworksMasonryGridComponent.h"
#import "ARArtworksMasonryShadowGrid.h"

@implementation ARArtworksMasonryGridComponentManager

RCT_EXPORT_MODULE();

- (UIView *)view;
{
    return [[ARArtworksMasonryGridComponent alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (RCTShadowView *)shadowView;
{
    return [ARArtworksMasonryShadowGrid new];
}

RCT_EXPORT_SHADOW_PROPERTY(artworks, NSArray);

RCT_EXPORT_SHADOW_PROPERTY(rank, NSUInteger);
RCT_EXPORT_SHADOW_PROPERTY(dimensionLength, CGFloat);
RCT_EXPORT_SHADOW_PROPERTY(contentInset, UIEdgeInsets);
RCT_EXPORT_SHADOW_PROPERTY(itemMargins, CGSize);

// TODO Untested
RCT_EXPORT_SHADOW_PROPERTY(direction, NSInteger);

@end

