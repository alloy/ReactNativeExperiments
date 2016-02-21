//
//  ARArtworkMasonryGridComponentCell.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

typedef struct
{
    CGFloat totalHeight;
    CGRect imageView;
    CGRect artistNameLabel;
    CGRect titleLabel;
    CGRect partnerNameLabel;
    CGRect saleMessageLabel;
} ARArtworksMasonryGridComponentCellFrames;

@interface ARArtworksMasonryGridComponentCell : UICollectionViewCell

// TODO Only supports vertical layout atm.
+ (void)calculateFrames:(ARArtworksMasonryGridComponentCellFrames *)cellFrames
             forArtwork:(NSDictionary *)artwork
              withWidth:(CGFloat)width;

- (void)configureWithArtwork:(NSDictionary *)artwork frames:(ARArtworksMasonryGridComponentCellFrames *)cellFrames;

@end
