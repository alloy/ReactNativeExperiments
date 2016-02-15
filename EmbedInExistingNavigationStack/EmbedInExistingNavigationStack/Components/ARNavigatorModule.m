#import "ARNavigatorModule.h"

#import "RootComponentViewController.h"

#include <inttypes.h>

@interface ARNavigatorModule ()
@property (strong) NSHashTable *viewControllers;
@end

@implementation ARNavigatorModule

- (instancetype)init;
{
    if ((self = [super init])) {
        _viewControllers = [NSHashTable weakObjectsHashTable];
    }
    return self;
}

- (void)registerViewController:(UIViewController *)viewController;
{
    [self.viewControllers addObject:viewController];
}

- (void)removeViewController:(UIViewController *)viewController;
{
    [self.viewControllers removeObject:viewController];
}

#pragma mark - Navigation

// TODO: This would normally be e.g. ARSwitchBoard, which knows how to route all our VCs.
- (UIViewController *)switchBoardVCForRoute:(NSString *)route;
{
    if ([route isEqualToString:@"/react-native-controller"]) {
        return [RootComponentViewController new];
    }
    return nil;
}

RCT_EXPORT_METHOD(pushViewController:(NSString *)route animated:(BOOL)animated fromViewController:(NSInteger)viewController)
{
    UIViewController *hostViewController = [self.viewControllers member:(__bridge id)(void *)viewController];
    // TODO Or just return and do nothing?
    NSParameterAssert(hostViewController);

    UIViewController *controller = [self switchBoardVCForRoute:route];
    NSParameterAssert(controller);

    [hostViewController.navigationController pushViewController:controller animated:animated];
}

#pragma mark - RCTBridgeModule

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue;
{
    return dispatch_get_main_queue();
}

@end
