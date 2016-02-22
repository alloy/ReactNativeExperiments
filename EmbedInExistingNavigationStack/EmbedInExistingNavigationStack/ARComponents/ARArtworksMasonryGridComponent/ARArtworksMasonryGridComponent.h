//
//  ARArtworksMasonryGridView.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

@class RCTEventDispatcher, ARArtworksMasonryGridComponentController;

@interface ARArtworksMasonryGridComponent : UIView

@property (nonatomic, strong) ARArtworksMasonryGridComponentController *controller;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;

@end

