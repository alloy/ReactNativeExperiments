//
//  ARMasonryGridViewManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridViewManager.h"
#import "ARMasonryGridView.h"

#import <ARCollectionViewMasonryLayout/ARCollectionViewMasonryLayout.h>

@implementation ARMasonryGridViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[ARMasonryGridView alloc] initWithEventDispatcher:self.bridge.eventDispatcher];
}

- (NSDictionary *)constantsToExport
{
    return @{
        @"verticalDirection": @(ARCollectionViewMasonryLayoutDirectionVertical),
        @"horizontalDirection": @(ARCollectionViewMasonryLayoutDirectionHorizontal),
    };
}

RCT_EXPORT_VIEW_PROPERTY(rank, NSUInteger);
RCT_EXPORT_VIEW_PROPERTY(dimensionLength, CGFloat);
RCT_EXPORT_VIEW_PROPERTY(contentInset, UIEdgeInsets);
RCT_EXPORT_VIEW_PROPERTY(itemMargins, CGSize);

@end
