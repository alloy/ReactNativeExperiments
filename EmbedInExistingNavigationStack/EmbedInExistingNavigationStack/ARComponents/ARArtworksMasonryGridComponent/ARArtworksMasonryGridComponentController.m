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
@property (nonatomic, strong) dispatch_group_t framesCalculationGroup;
@property (nonatomic, assign) ARArtworksMasonryGridComponentCellFrames *cellFrames;
@end

@implementation ARArtworksMasonryGridComponentController

- (void)dealloc;
{
    free(_cellFrames);
}

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

- (void)setCellFrames:(ARArtworksMasonryGridComponentCellFrames *)cellFrames;
{
    free(_cellFrames);
    _cellFrames = cellFrames;
}

// TODO This needs to batch update instead of reloading.
- (void)setArtworks:(NSArray<NSDictionary *> *)artworks;
{
    NSAssert(self.framesCalculationGroup == nil, @"Did not finish calculating frames yet.");
    
    _artworks = artworks;
    self.cellFrames = calloc(artworks.count, sizeof(ARArtworksMasonryGridComponentCellFrames));

    dispatch_group_t group = dispatch_group_create();
    self.framesCalculationGroup = group;
    dispatch_queue_t queue = dispatch_get_global_queue(QOS_CLASS_USER_INTERACTIVE, 0);

    CGFloat dimensionLength = [(ARCollectionViewMasonryLayout *)self.collectionView.collectionViewLayout dimensionLength];

    dispatch_group_async(group, queue, ^{
        NSUInteger artworksCount = self.artworks.count;
        for (NSUInteger i = 0; i < artworksCount; i++) {
            dispatch_group_async(group, queue, ^{
                [ARArtworksMasonryGridComponentCell calculateFrames:&self.cellFrames[i]
                                                         forArtwork:self.artworks[i]
                                                          withWidth:dimensionLength];
            });
        }
    });
    dispatch_group_notify(group, queue, ^{
        self.framesCalculationGroup = nil;
    });

    dispatch_async(dispatch_get_main_queue(), ^{
        // TODO Check if this actually performs work when the view is not shown yet
        // and if calling this here means that the main thread will be halted waiting for the frames
        [self.collectionView reloadData];
    });
}

- (ARArtworksMasonryGridComponentCellFrames *)cellFramesAtIndex:(NSUInteger)index;
{
    if (self.framesCalculationGroup) {
        // Still calculating, halt the thread, shouldn’t take too long.
        dispatch_group_wait(self.framesCalculationGroup, DISPATCH_TIME_FOREVER);
    }
    return &self.cellFrames[index];
}

#pragma mark - ARCollectionViewMasonryLayoutDelegate

- (CGFloat)collectionView:(UICollectionView *)collectionView layout:(ARCollectionViewMasonryLayout *)collectionViewLayout
                                variableDimensionForItemAtIndexPath:(NSIndexPath *)indexPath;
{
    return [self cellFramesAtIndex:indexPath.row]->totalHeight;
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
    [cell configureWithArtwork:self.artworks[indexPath.row] frames:&self.cellFrames[indexPath.row]];
    return cell;
}

@end
