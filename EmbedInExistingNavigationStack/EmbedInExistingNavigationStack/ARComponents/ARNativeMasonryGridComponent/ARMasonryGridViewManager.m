//
//  ARMasonryGridViewManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridViewManager.h"
#import "ARMasonryGridView.h"

@implementation ARMasonryGridViewManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[ARMasonryGridView alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
}


RCT_EXPORT_VIEW_PROPERTY(artworks, NSArray)

@end
