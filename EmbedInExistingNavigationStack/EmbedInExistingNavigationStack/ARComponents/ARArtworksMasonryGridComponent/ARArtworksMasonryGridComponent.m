//
//  ARArtworksMasonryGridView.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponent.h"
#import "ARArtworksMasonryGridComponentController.h"

#import <React/UIView+React.h>
#import <React/RCTEventDispatcher.h>

@interface ARArtworksMasonryGridComponent ()
@property (nonatomic, weak) RCTEventDispatcher *eventDispatcher;
@end

@implementation ARArtworksMasonryGridComponent

- (void)dealloc;
{
  // _controller.delegate = nil;
  [_controller removeFromParentViewController];
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;
{
  if ((self = [super init])) {
    _eventDispatcher = eventDispatcher;
  }
  return self;
}

- (void)setController:(ARArtworksMasonryGridComponentController *)controller;
{
    _controller = controller;
//     _controller.delegate = self;
    _controller.view.frame = self.bounds;
    _controller.view.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    [self addSubview:_controller.view];
}

#pragma mark - React

// TODO To allow or not to allow?
- (void)insertReactSubview:(UIView *)view atIndex:(NSInteger)atIndex
{
    NSAssert(NO, @"It is unexpected that subviews would be added to %@", self.class);
}

- (UIViewController *)reactViewController
{
    return self.controller;
}

- (void)reactBridgeDidFinishTransaction
{
    // Taken from RCTTabBar.m:
    //
    // we can't hook up the VC hierarchy in 'init' because the subviews aren't
    // hooked up yet, so we do it on demand here whenever a transaction has finished
    [self reactAddControllerToClosestParent:self.controller];
}

@end

