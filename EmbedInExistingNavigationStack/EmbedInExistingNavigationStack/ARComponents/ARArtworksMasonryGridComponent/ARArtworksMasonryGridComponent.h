//
//  ARArtworksMasonryGridView.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

@class RCTBridge, ARArtworksMasonryGridComponentController;

@interface ARArtworksMasonryGridComponent : UIView

@property (nonatomic, assign) NSInteger direction;
@property (nonatomic, assign) NSUInteger rank;
@property (nonatomic, assign) CGFloat dimensionLength;
@property (nonatomic, assign) UIEdgeInsets contentInset;
@property (nonatomic, assign) CGSize itemMargins;

@property (nonatomic, copy) NSArray<NSDictionary *> *artworks;

- (instancetype)initWithBridge:(RCTBridge *)bridge;

@end

