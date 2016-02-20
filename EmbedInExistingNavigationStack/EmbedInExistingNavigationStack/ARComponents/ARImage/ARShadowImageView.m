//
//  ARShadowImageView.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 19/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARShadowImageView.h"

#import <React/RCTUtils.h>

@implementation ARShadowImageView

static css_dim_t RCTMeasure(void *context, float width, float height)
{
    ARShadowImageView *shadowImage = (__bridge ARShadowImageView *)context;
    css_dim_t result;
    if (width != NAN) {
        result.dimensions[CSS_WIDTH] = RCTCeilPixelValue(width);
        result.dimensions[CSS_HEIGHT] = RCTCeilPixelValue(width / shadowImage.aspectRatio);
    } else if (height != NAN) {
        result.dimensions[CSS_WIDTH] = RCTCeilPixelValue(height * shadowImage.aspectRatio);
        result.dimensions[CSS_HEIGHT] = RCTCeilPixelValue(height);
    }
//    NSCAssert(result.dimensions[CSS_WIDTH] != NAN && result.dimensions[CSS_HEIGHT] != NAN, @"INVALID!");
    return result;
}

- (void)fillCSSNode:(css_node_t *)node
{
    [super fillCSSNode:node];
    node->measure = RCTMeasure;
}

@end
