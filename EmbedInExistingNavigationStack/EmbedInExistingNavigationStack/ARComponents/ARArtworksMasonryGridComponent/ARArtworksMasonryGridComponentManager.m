//
//  ARArtworksMasonryGridViewManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponentManager.h"
#import "ARArtworksMasonryGridComponent.h"

@implementation ARArtworksMasonryGridComponentManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [ARArtworksMasonryGridComponent new];
}

RCT_EXPORT_VIEW_PROPERTY(direction, NSInteger);
RCT_EXPORT_VIEW_PROPERTY(rank, NSUInteger);
RCT_EXPORT_VIEW_PROPERTY(dimensionLength, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(contentInset, UIEdgeInsets);
RCT_EXPORT_VIEW_PROPERTY(itemMargins, CGSize);
RCT_EXPORT_VIEW_PROPERTY(artworks, NSArray);

@end

