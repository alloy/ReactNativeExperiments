//
//  ARMasonryGridCellEventReceiverManager.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridCellEventReceiverManager.h"
#import "ARMasonryGridCellEventReceiver.h"

@implementation ARMasonryGridCellEventReceiverManager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [ARMasonryGridCellEventReceiver new];
}

@end
