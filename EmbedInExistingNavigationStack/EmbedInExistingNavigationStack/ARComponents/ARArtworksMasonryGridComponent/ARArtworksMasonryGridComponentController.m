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

// TODO This needs to bacth update instead of reloading.
- (void)setArtworks:(NSArray<NSDictionary *> *)artworks;
{
    _artworks = artworks;
    [self.collectionView reloadData];
}

#pragma mark - ARCollectionViewMasonryLayoutDelegate

- (CGFloat)collectionView:(UICollectionView *)collectionView layout:(ARCollectionViewMasonryLayout *)collectionViewLayout
                                variableDimensionForItemAtIndexPath:(NSIndexPath *)indexPath;
{
  return 100;
}

#pragma mark - UICollectionViewDataSource

- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section;
{
  return self.artworks.count;
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath;
{
    ARArtworksMasonryGridComponentCell *cell = (id)[collectionView dequeueReusableCellWithReuseIdentifier:CellIdentifier
                                                                                             forIndexPath:indexPath];
    cell.backgroundColor = [UIColor redColor];
    return cell;
}

@end
