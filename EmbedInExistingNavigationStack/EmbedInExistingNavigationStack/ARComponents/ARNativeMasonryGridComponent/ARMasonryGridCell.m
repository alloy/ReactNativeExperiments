//
//  ARMasonryGridCell.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 19/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridCell.h"

@interface UIView (ReactPrivate)
- (void)reactSetFrame:(CGRect)frame;
@end

@implementation ARMasonryGridCell

// TODO Maybe do this in a shadow view? Only really matters if we can cut down on
//      layout costs as well that way.
//
- (void)reactSetFrame:(CGRect)frame;
{
    frame.origin = CGPointZero;
    [super reactSetFrame:frame];
}

@end
