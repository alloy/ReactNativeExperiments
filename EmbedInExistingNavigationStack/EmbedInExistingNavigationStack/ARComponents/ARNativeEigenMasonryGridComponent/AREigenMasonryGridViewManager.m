//
//  AREigenMasonryGridViewManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "AREigenMasonryGridViewManager.h"
#import "AREigenMasonryGridView.h"

@implementation AREigenMasonryGridViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [AREigenMasonryGridView new];
}

RCT_EXPORT_VIEW_PROPERTY(artworks, NSArray)

@end
