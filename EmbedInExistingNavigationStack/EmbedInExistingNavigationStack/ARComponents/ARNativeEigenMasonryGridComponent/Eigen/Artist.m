//
//  Artist.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "Artist.h"

@interface Artist ()
@property (nonatomic, copy) NSDictionary *data;
@end

@implementation Artist

- (instancetype)initWithDictionary:(NSDictionary *)data;
{
    if ((self = [super init])) {
        _data = data;
    }
    return self;
}

- (NSString *)name;
{
    return self.data[@"name"];
}

@end
