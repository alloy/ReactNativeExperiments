//
//  RootComponentViewController.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 14/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "RootComponentViewController.h"
#import "AppDelegate.h"

#import "ARNavigatorModule.h"
#import <React/RCTRootView.h>

@interface RootComponentViewController ()
@property (strong) RCTRootView *rootView;
@end

@implementation RootComponentViewController

- (instancetype)init;
{
    if ((self = [super init])) {
        self.title = [NSString stringWithFormat:@"%p", self];
    }
    return self;
}

- (void)viewDidLoad;
{
    [super viewDidLoad];
    
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    // Register this VC with the navigator and pass this VC by reference to the React component.
    [appDelegate.navigatorModule registerViewController:self];
    NSDictionary *reactProps = @{ @"viewControllerID": @((NSInteger)self) };
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:appDelegate.bridge
                                                     moduleName:@"SimpleApp"
                                              initialProperties:reactProps];
    
    [self.view addSubview:rootView];
    rootView.translatesAutoresizingMaskIntoConstraints = NO;
    [self.view addConstraints:@[
        [rootView.topAnchor constraintEqualToAnchor:self.topLayoutGuide.bottomAnchor constant:0],
        [rootView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:0],
        [rootView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:0],
        [rootView.bottomAnchor constraintEqualToAnchor:self.bottomLayoutGuide.topAnchor constant:0],
    ]];

    self.rootView = rootView;
}

@end
