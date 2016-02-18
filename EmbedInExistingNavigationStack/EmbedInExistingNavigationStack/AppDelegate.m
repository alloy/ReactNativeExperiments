//
//  AppDelegate.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 14/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "AppDelegate.h"
#import "ViewController.h"

#import "ARNavigatorModule.h"
#import <React/RCTBridge.h>

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    ARNavigatorModule *navigator = [ARNavigatorModule new];
    self.navigatorModule = navigator;
    
    // For production use, this `NSURL` could instead point to a pre-bundled file on disk:
    //
    NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    //
    // To generate that file, run the curl command and add the output to your main Xcode build target:
    //
    //   curl http://localhost:8081/index.ios.bundle -o main.jsbundle
    //
    // We initialize the ReactNative bridge here for performance, so that it’s all loaded by the time we
    // try to load a React component.
//    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];

    // TODO: The module provider block is actually supposed to return a new instance every time!
    // It's requested again when reloading during dev.
    self.bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
                                        moduleProvider:^{ return @[navigator]; }
                                         launchOptions:launchOptions];

    UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:[ViewController new]];

    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.rootViewController = navigationController;
    [self.window makeKeyAndVisible];
    
    return YES;
}

@end
