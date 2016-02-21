//
//  AROpaqueImageView.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 21/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface AROpaqueImageView : UIView
@property (nonatomic, strong) UIImage *image;
- (void)loadImageFromURL:(NSURL *)imageURL;
@end
