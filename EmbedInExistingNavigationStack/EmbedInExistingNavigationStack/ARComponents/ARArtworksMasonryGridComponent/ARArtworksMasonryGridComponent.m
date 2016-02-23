//
//  ARArtworksMasonryGridView.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponent.h"
#import "ARArtworksMasonryGridComponentController.h"

#import <ARCollectionViewMasonryLayout/ARCollectionViewMasonryLayout.h>

#import <React/UIView+React.h>
#import <React/RCTBridge.h>
#import <React/RCTUIManager.h>

@interface ARArtworksMasonryGridComponent ()
  @property (nonatomic, weak) RCTBridge *bridge;
  @property (nonatomic, strong) ARArtworksMasonryGridComponentController *controller;
  @end

  static char ContentSizeContext;

  @implementation ARArtworksMasonryGridComponent

  - (void)dealloc;
{
  [_controller.view removeObserver:self forKeyPath:@"contentSize" context:&ContentSizeContext];
  // _controller.delegate = nil;
  [_controller removeFromParentViewController];
}

- (instancetype)initWithBridge:(RCTBridge *)bridge;
{
  if ((self = [super init])) {
    _bridge = bridge;

    _controller = [ARArtworksMasonryGridComponentController new];
    // _controller.delegate = self;
    _controller.view.frame = self.bounds;
    _controller.view.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
    [self addSubview:_controller.view];

    [_controller.view addObserver:self
                       forKeyPath:@"contentSize"
                          options:NSKeyValueObservingOptionOld | NSKeyValueObservingOptionNew
                          context:&ContentSizeContext];
  }
  return self;
}

// TODO We currently only deal with vertical grids.
- (void)observeValueForKeyPath:(NSString *)keyPath
                      ofObject:(id)object
                        change:(NSDictionary *)change
                       context:(void *)context
{
  if (context == &ContentSizeContext) {
    CGSize oldSize = [change[NSKeyValueChangeOldKey] CGSizeValue];
    CGSize newSize = [change[NSKeyValueChangeNewKey] CGSizeValue];
    if (!CGSizeEqualToSize(oldSize, newSize)) {
      [self.bridge.uiManager setFrame:CGRectMake(NAN, NAN, NAN, newSize.height) forView:self];
    }
  } else {
    [super observeValueForKeyPath:keyPath
                         ofObject:object
                           change:change
                          context:context];
  }
}

- (ARCollectionViewMasonryLayout *)layout;
{
  return (ARCollectionViewMasonryLayout *)self.controller.collectionView.collectionViewLayout;
}

#pragma mark - Bridged properties

- (NSArray<NSDictionary *> *)artworks;
{
  return self.controller.artworks;
}

- (void)setArtworks:(NSArray<NSDictionary *> *)artworks;
{
  self.controller.artworks = artworks;
}

- (NSInteger)direction;
{
  return self.layout.direction;
}

- (void)setDirection:(NSInteger)direction;
{
  if (direction != self.direction) {
    ARCollectionViewMasonryLayout *layout = [[ARCollectionViewMasonryLayout alloc] initWithDirection:direction];
    self.controller.collectionView.collectionViewLayout = layout;
  }
}

- (NSUInteger)rank;
{
  return self.layout.rank;
}

- (void)setRank:(NSUInteger)rank;
{
  self.layout.rank = rank;
}

- (CGFloat)dimensionLength;
{
  return self.layout.dimensionLength;
}

- (void)setDimensionLength:(CGFloat)dimensionLength;
{
  self.layout.dimensionLength = dimensionLength;
}

- (UIEdgeInsets)contentInset;
{
  return self.layout.contentInset;
}

- (void)setContentInset:(UIEdgeInsets)contentInset;
{
  self.layout.contentInset = contentInset;
}

- (CGSize)itemMargins;
{
  return self.layout.itemMargins;
}

- (void)setItemMargins:(CGSize)itemMargins;
{
  self.layout.itemMargins = itemMargins;
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

