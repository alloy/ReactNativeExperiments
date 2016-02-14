//
//  RootComponentViewController.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 14/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "RootComponentViewController.h"

#import <React/RCTRootView.h>

@interface RootComponentViewController ()

@end

@implementation RootComponentViewController

- (void)viewDidLoad;
{
    [super viewDidLoad];
    
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    // For production use, this `NSURL` could instead point to a pre-bundled file on disk:
    //
    //   NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    //
    // To generate that file, run the curl command and add the output to your main Xcode build target:
    //
    //   curl http://localhost:8081/index.ios.bundle -o main.jsbundle
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName: @"SimpleApp"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    
    [self.view addSubview:rootView];
    rootView.translatesAutoresizingMaskIntoConstraints = NO;
    [self.view addConstraints:@[
        [rootView.topAnchor constraintEqualToAnchor:self.topLayoutGuide.bottomAnchor constant:0],
        [rootView.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:0],
        [rootView.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:0],
        [rootView.bottomAnchor constraintEqualToAnchor:self.bottomLayoutGuide.topAnchor constant:0],
    ]];
}

@end
