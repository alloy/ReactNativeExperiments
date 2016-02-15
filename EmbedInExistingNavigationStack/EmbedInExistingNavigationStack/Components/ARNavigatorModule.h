#import <UIKit/UIKit.h>
#import <React/RCTBridgeModule.h>

@interface ARNavigatorModule : NSObject <RCTBridgeModule>

- (void)registerViewController:(UIViewController *)viewController;

/// Use this if you wish to explicitely remove the registered VC.
/// Otherwise it is automatically removed when it is deallocated.
- (void)removeViewController:(UIViewController *)viewController;

@end
