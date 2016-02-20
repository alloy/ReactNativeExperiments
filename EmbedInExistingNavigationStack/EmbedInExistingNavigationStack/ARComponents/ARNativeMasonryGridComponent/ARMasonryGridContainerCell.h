//
//  ARMasonryGridContainerCell.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 19/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

@class ARMasonryGridCell, RCTEventDispatcher;

@interface ARMasonryGridContainerCell : UICollectionViewCell
@property (nonatomic, weak) RCTEventDispatcher *eventDispatcher;
@property (nonatomic, weak) ARMasonryGridCell *cell;
@end
