// TODO:
// * Look into subclassing RCTView instead and if we can improve performance by unmounting/mounting clipped views
// * Experiment with adding a VC (through -[UIView reactAddControllerToClosestParent:]), to be able to control orientation changes better. (RCTViewControllerProtocol)

#import "ARMasonryGridView.h"
#import "ARMasonryGridCell.h"
#import "ARMasonryGridContainerCell.h"

#import <ARCollectionViewMasonryLayout/ARCollectionViewMasonryLayout.h>


// TODO: These headers could use some cleanup.
#import <React/RCTComponent.h>
#import <React/UIView+React.h>
@interface UIView (ReactPrivate)
- (NSNumber *)reactTag;
- (void)insertReactSubview:(UIView<RCTComponent> *)subview atIndex:(NSInteger)index;
- (void)removeReactSubview:(UIView<RCTComponent> *)subview;
@end


#ifdef DEBUG
@interface UIView (recursiveDescription)
- (NSString *)recursiveDescription;
@end
#endif


static NSString *ContainerCellIdentifier = @"ContainerCell";


@interface ARMasonryGridView () <RCTComponent, UICollectionViewDataSource, UICollectionViewDelegate, ARCollectionViewMasonryLayoutDelegate>
// TODO: Experiment with adding a VC as well, to be able to control orientation changes better.
//@property (strong) UIViewController *controller;
@property (nonatomic, strong) NSMutableArray<UIView<RCTComponent> *> *reactCells;

@property (nonatomic, strong) UICollectionView *collectionView;
@property (nonatomic, strong) ARCollectionViewMasonryLayout *layout;
@end

@implementation ARMasonryGridView

// UIView+React.m
@dynamic reactTag;

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher;
{
    if ((self = [super init])) {
        _eventDispatcher = eventDispatcher;
        
        _layout = [[ARCollectionViewMasonryLayout alloc] initWithDirection:ARCollectionViewMasonryLayoutDirectionVertical];
        _collectionView = [[UICollectionView alloc] initWithFrame:self.bounds collectionViewLayout:_layout];
        _collectionView.delegate = self;
        _collectionView.dataSource = self;
        [_collectionView registerClass:ARMasonryGridContainerCell.class forCellWithReuseIdentifier:ContainerCellIdentifier];

        _collectionView.autoresizingMask = UIViewAutoresizingFlexibleHeight | UIViewAutoresizingFlexibleWidth;
        [self addSubview:_collectionView];
//        _collectionView.translatesAutoresizingMaskIntoConstraints =
        
        _reactCells = [NSMutableArray new];
    }
    return self;
}

#pragma mark - Bridged properties

- (NSUInteger)rank;
{
    return self.layout.rank;
}

- (void)setRank:(NSUInteger)rank;
{
    self.layout.rank = rank;
}

- (CGFloat)dimensionLength;
{
    return self.layout.dimensionLength;
}

- (void)setDimensionLength:(CGFloat)dimensionLength;
{
    self.layout.dimensionLength = dimensionLength;
}

- (UIEdgeInsets)contentInset;
{
    return self.layout.contentInset;
}

- (void)setContentInset:(UIEdgeInsets)contentInset;
{
    self.layout.contentInset = contentInset;
}

- (CGSize)itemMargins;
{
    return self.layout.itemMargins;
}

- (void)setItemMargins:(CGSize)itemMargins;
{
    self.layout.itemMargins = itemMargins;
}

#pragma mark - RCTComponent

// Do not actually let React add our cells, we let the collection view do that from -collectionView:cellForItemAtIndexPath:
- (void)insertReactSubview:(UIView<RCTComponent> *)subview atIndex:(NSInteger)index;
{
//    NSLog(@"insertReactSubview:atIndex:%ld - %@", (long)index, subview);
    if ([subview isKindOfClass:ARMasonryGridCell.class]) {
        [self.reactCells addObject:subview];
        // There’s no callback after RCTUIManager is done adding subviews, so there’s no ‘proper’
        // place where to reload the collection view. But as the collection view doesn’t actually
        // reload its data until the next runloop, we can call -reloadData multiple times without
        // it doing more work than necessary.
        //
        // TODO: For -performBatchUpdates:completion:, however, we would need to change things.
        //
        // See -[RCTUIManager _manageChildren:moveFromIndices:moveToIndices:addChildReactTags:addAtIndices:removeAtIndices:registry:]
        [self.collectionView reloadData];
    } else {
        [super insertReactSubview:subview atIndex:index];
    }
}

// TODO When does this happen and how should we handle it?
- (void)removeReactSubview:(UIView<RCTComponent> *)subview;
{
    NSLog(@"removeReactSubview: %@", subview);
//    [self.reactCells removeObject:subview];
//    [self reloadData];
    [super removeReactSubview:subview];
}

//- (void)reactBridgeDidFinishTransaction;
//{
////    [super reactBridgeDidFinishTransaction];
//    NSLog(@"DID FINISH TRANSACTION!");
//}


#pragma mark - UICollectionViewDataSource Methods

- (NSInteger)numberOfSectionsInCollectionView:(UICollectionView * _Nonnull)collectionView;
{
    return 1;
}

- (NSInteger)collectionView:(UICollectionView * _Nonnull)collectionView numberOfItemsInSection:(NSInteger)section;
{
    return self.reactCells.count;
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath {
    ARMasonryGridContainerCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:ContainerCellIdentifier forIndexPath:indexPath];
    cell.eventDispatcher = self.eventDispatcher;

//    UIView *cellView = self.reactCells[indexPath.row];
//    CGRect frame = cellView.bounds;
//    cellView.frame = frame;

//    [cell.contentView addSubview:cellView];
    cell.cell = (ARMasonryGridCell *)self.reactCells[indexPath.row];

//    NSLog(@"CELL: %@", [cell recursiveDescription]);
    return cell;
}

#pragma mark - ARCollectionViewMasonryLayoutDelegate Methods

- (CGFloat)collectionView:(UICollectionView *)collectionView layout:(ARCollectionViewMasonryLayout *)collectionViewLayout variableDimensionForItemAtIndexPath:(NSIndexPath *)indexPath
{
    return CGRectGetHeight(self.reactCells[indexPath.row].bounds);
}

@end
