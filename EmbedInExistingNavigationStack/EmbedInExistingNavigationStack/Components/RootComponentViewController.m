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

- (void)viewDidLoad;
{
    [super viewDidLoad];
    
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:appDelegate.bridge moduleName:@"SimpleApp" initialProperties:@{ @"text": self.description, @"viewControllerID": @((NSInteger)self) }];
    
    [self.view addSubview:rootView];
    rootView.translatesAutoresizingMaskIntoConstraints = NO;
    [self.view addConstraints:@[
        [rootView.topAnchor constraintEqualToAnchor:self.topLayoutGuide.bottomAnchor constant:0],
        [rootView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:0],
        [rootView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:0],
        [rootView.bottomAnchor constraintEqualToAnchor:self.bottomLayoutGuide.topAnchor constant:0],
    ]];

    [appDelegate.navigatorModule registerViewController:self];
    self.rootView = rootView;
}

@end
