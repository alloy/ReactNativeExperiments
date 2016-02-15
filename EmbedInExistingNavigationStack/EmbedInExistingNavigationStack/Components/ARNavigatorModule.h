#import <UIKit/UIKit.h>
#import <React/RCTBridgeModule.h>

/// This module is used to make it possible for the JS side of the bridge
/// to manipulate the navigation stack of the view controller that its
/// RCTRootView belongs to.
///
/// See http://facebook.github.io/react-native/docs/communication-ios.html#calling-native-functions-from-react-native-native-modules
///
///
@interface ARNavigatorModule : NSObject <RCTBridgeModule>

- (void)registerViewController:(UIViewController *)viewController;

/// Use this if you wish to explicitely remove the registered VC.
/// Otherwise it is automatically removed when it is deallocated.
- (void)removeViewController:(UIViewController *)viewController;

@end
