//
//  ARMasonryGridView.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTEventDispatcher.h>

@interface ARMasonryGridView : UIView
@property (nonatomic, assign) NSInteger direction;
@property (nonatomic, assign) NSUInteger rank;
@property (nonatomic, assign) CGFloat dimensionLength;
@property (nonatomic, assign) UIEdgeInsets contentInset;
@property (nonatomic, assign) CGSize itemMargins;

@property (nonatomic, weak) RCTEventDispatcher *eventDispatcher;
- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;
@end
