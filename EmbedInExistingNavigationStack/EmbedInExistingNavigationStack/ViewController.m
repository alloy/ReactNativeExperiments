//
//  ViewController.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 14/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "ViewController.h"
#import "RootComponentViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewWillAppear:(BOOL)animated;
{
    [super viewWillAppear:animated];
    self.title = [NSString stringWithFormat:@"VC %ld", self.navigationController.viewControllers.count];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor whiteColor];

    UIButton *button = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    [button setTitle:@"Push ReactNative VC" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(pushReactNativeVC) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
    [button sizeToFit];
    button.center = self.view.center;
}

- (void)pushReactNativeVC;
{
    [self.navigationController pushViewController:[RootComponentViewController new] animated:YES];
}

@end
