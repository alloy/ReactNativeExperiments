//
//  ARMasonryGridView.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARMasonryGridView.h"
#import "AREmbeddedModelsViewController.h"
#import "Artwork.h"

#import <FLKAutoLayout/UIView+FLKAutoLayout.h>

@interface ARMasonryGridView ()
@property (strong) AREmbeddedModelsViewController *controller;
@end

@implementation ARMasonryGridView

- (instancetype)init;
{
    if ((self = [super init])) {
        _controller = [AREmbeddedModelsViewController new];
        [self addSubview:_controller.view];
        [_controller.view alignToView:self];
    }
    return self;
}

- (void)setArtworks:(NSArray *)artworks;
{
    NSMutableArray *models = [NSMutableArray new];
    for (NSDictionary *data in artworks) {
        [models addObject:[[Artwork alloc] initWithJSON:data]];
    }
    [self.controller appendItems:models];
}

@end
