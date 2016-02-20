//
//  AREigenMasonryGridView.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "AREigenMasonryGridView.h"

// Eigen
#import "AREmbeddedModelsViewController.h"
#import "Artwork.h"

// React
#import "UIView+React.h"

@interface AREigenMasonryGridView ()
@property (nonatomic, strong) AREmbeddedModelsViewController *controller;
@property (nonatomic, copy) NSArray<Artwork *> *artworkModels;
@end

@implementation AREigenMasonryGridView

- (void)dealloc
{
    _controller.delegate = nil;
    [_controller removeFromParentViewController];
}

- (instancetype)initWithFrame:(CGRect)frame;
{
    if ((self = [super initWithFrame:frame])) {
        _controller = [AREmbeddedModelsViewController new];
//        _controller.delegate = self;
        _controller.view.frame = self.bounds;
        _controller.view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
        [self addSubview:_controller.view];
    }
    return self;
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

#pragma mark - AREigenMasonryGridView

- (void)setArtworks:(NSArray<NSDictionary *> *)artworks;
{
  _artworks = artworks;

  NSMutableArray *models = [NSMutableArray arrayWithCapacity:artworks.count];
  for (NSDictionary *artwork in artworks) {
    [models addObject:[[Artwork alloc] initWithDictionary:artwork]];
  }
  self.artworkModels = models;

  [self.controller appendItems:self.artworkModels];
}

@end
