//
//  ARMasonryGridCellManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 19/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridCellManager.h"
#import "ARMasonryGridCell.h"

@implementation ARMasonryGridCellManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[ARMasonryGridCell alloc] init];
}

@end
