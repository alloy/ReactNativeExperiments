//
//  ARArtworksMasonryGridViewController.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 20/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ARArtworksMasonryGridComponentController.h"
#import "ARArtworksMasonryGridComponentCell.h"

#import <ARCollectionViewMasonryLayout/ARCollectionViewMasonryLayout.h>

static NSString *CellIdentifier = @"ARArtworksMasonryGridComponentCell";

@interface ARArtworksMasonryGridComponentController () <ARCollectionViewMasonryLayoutDelegate,
                                                        UICollectionViewDataSource,
                                                        UICollectionViewDelegate>
@end

@implementation ARArtworksMasonryGridComponentController

- (UICollectionView *)collectionView;
{
  return (UICollectionView *)self.view;
}

- (void)loadView;
{
  ARCollectionViewMasonryLayoutDirection direction = ARCollectionViewMasonryLayoutDirectionVertical;
  ARCollectionViewMasonryLayout *layout = [[ARCollectionViewMasonryLayout alloc] initWithDirection:direction];

  UICollectionView *collectionView = [[UICollectionView alloc] initWithFrame:CGRectZero collectionViewLayout:layout];
  collectionView.delegate = self;
  collectionView.dataSource = self;
  collectionView.backgroundColor = [UIColor clearColor];
  [collectionView registerClass:ARArtworksMasonryGridComponentCell.class
      forCellWithReuseIdentifier:CellIdentifier];

  self.view = collectionView;
}

#pragma mark - ARCollectionViewMasonryLayoutDelegate

- (CGFloat)collectionView:(UICollectionView *)collectionView layout:(ARCollectionViewMasonryLayout *)collectionViewLayout
                                variableDimensionForItemAtIndexPath:(NSIndexPath *)indexPath;
{
  return 0;
}

#pragma mark - UICollectionViewDataSource

- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section;
{
  return 0;
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath;
{
  return nil;
}

@end
