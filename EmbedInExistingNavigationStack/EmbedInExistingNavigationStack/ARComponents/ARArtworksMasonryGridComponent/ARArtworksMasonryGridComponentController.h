//
//  ARArtworksMasonryGridViewController.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ARArtworksMasonryGridComponentController : UIViewController
@property (nonatomic, copy) NSArray<NSDictionary *> *artworks;
@property (nonatomic, strong, readonly) UICollectionView *collectionView;
@end
