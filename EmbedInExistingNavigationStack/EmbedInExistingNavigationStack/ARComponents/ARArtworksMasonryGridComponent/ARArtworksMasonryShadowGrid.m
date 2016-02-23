//
//  ARArtworksMasonryShadowGrid.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 22/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryShadowGrid.h"

@implementation ARArtworksMasonryShadowGrid

// This is called by ARArtworksMasonryGridComponent whenever the collection view’s contentSize changes.
// However, if the user has set an explicit style height or flex (from JS) then we ignore this.
//
// TODO The big question is, does this get called by React for other legitimate reasons? So the better
//      fix would be to add a new method to RCTUIManager that sends a ‘suggested size’ to the shadow
//      view for the specified view.
//
// TODO We currently only deal with vertical grids.
//
- (void)setFrame:(CGRect)frame
{
  // The grid component sets the origin to NaNs as a sentinel that it comes from our code.
  if (isnan(frame.origin.x) && isnan(frame.origin.y)) {
    css_style_t style = self.cssNode->style;
    // If an explicit flex style is specified (from JS), then ignore this size suggestion.
    if (style.flex == 0) {
      NSAssert(isnan(frame.size.width) && !isnan(frame.size.height), @"We currently only deal with vertical grids.");
      // If an explicit height style is specified (from JS), then ignore this size suggestion.
      if (isnan(style.dimensions[CSS_HEIGHT])) {
        // We only want to specify the height from the grid component, leave other values as they are.
        [super setFrame:CGRectMake(style.position[CSS_LEFT], style.position[CSS_TOP],
                                   style.dimensions[CSS_WIDTH], CGRectGetHeight(frame))];
      }
    }
  } else {
    [super setFrame:frame];
  }
}

@end
