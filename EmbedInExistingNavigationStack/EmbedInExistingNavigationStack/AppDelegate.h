//
//  AppDelegate.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 14/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>

@class ARNavigatorModule, RCTBridge;

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (nonatomic, strong) ARNavigatorModule *navigatorModule;
@property (nonatomic, strong) RCTBridge *bridge;

@end

