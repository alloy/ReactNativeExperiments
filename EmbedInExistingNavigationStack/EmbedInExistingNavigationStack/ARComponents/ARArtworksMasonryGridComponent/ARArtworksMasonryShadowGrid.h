//
//  ARArtworksMasonryShadowGrid.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 22/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <React/RCTBridge.h>
#import <React/RCTShadowView.h>

@interface ARArtworksMasonryShadowGrid : RCTShadowView

@property (nonatomic, assign) NSInteger direction;
@property (nonatomic, assign) NSUInteger rank;
@property (nonatomic, assign) CGFloat dimensionLength;
@property (nonatomic, assign) UIEdgeInsets contentInset;
@property (nonatomic, assign) CGSize itemMargins;

@property (nonatomic, copy) NSArray<NSDictionary *> *artworks;

@end
