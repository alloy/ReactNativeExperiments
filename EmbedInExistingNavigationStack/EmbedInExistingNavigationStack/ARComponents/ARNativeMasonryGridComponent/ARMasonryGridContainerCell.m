//
//  ARMasonryGridContainerCell.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 19/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridContainerCell.h"
#import "ARMasonryGridCell.h"
#import "ARMasonryGridCellEventReceiver.h"

#import <React/UIView+React.h>
#import <React/RCTEventDispatcher.h>

@implementation ARMasonryGridContainerCell

- (void)setCell:(ARMasonryGridCell *)cell;
{
    _cell = cell;
    [self.contentView addSubview:cell];
    [self sendHidden:NO];
//    [self.eventDispatcher sendInputEventWithName:@"topChange"
//                                            body:@{ @"target": cell.reactTag,
//                                                    @"cellIsHidden": @(NO) }];
}

- (void)prepareForReuse;
{
    ARMasonryGridCell *cell = self.cell;
    if (cell) {
        [self sendHidden:YES];
//        [self.eventDispatcher sendInputEventWithName:@"topChange"
//                                                body:@{ @"target": cell.reactTag,
//                                                        @"cellIsHidden": @(YES) }];
        [cell removeFromSuperview];
    }
}

static ARMasonryGridCellEventReceiver *
FindEventReceiver(UIView *view)
{
    for (UIView *subview in view.subviews) {
        if ([subview isKindOfClass:ARMasonryGridCellEventReceiver.class]) {
            return (ARMasonryGridCellEventReceiver *)subview;
        } else {
            UIView *found = FindEventReceiver(subview);
            if (found) {
                return (ARMasonryGridCellEventReceiver *)found;
            }
        }
    }
    return nil;
}

- (void)sendHidden:(BOOL)hidden;
{
    ARMasonryGridCell *cell = self.cell;
    ARMasonryGridCellEventReceiver *eventReceiver = FindEventReceiver(cell);
    if (eventReceiver) {
        RCTEventDispatcher *eventDispatcher = self.eventDispatcher;
        [eventDispatcher sendInputEventWithName:@"topChange"
                                           body:@{ @"target": eventReceiver.reactTag,
                                                   @"cellIsHidden": @(hidden) }];
    }
}

@end
