//
//  Artwork.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "Artwork.h"

@interface Artwork ()
@property (nonatomic, copy) NSDictionary *data;
@end

@implementation Artwork

- (instancetype)initWithJSON:(NSDictionary *)json;
{
    if ((self = [super init])) {
        _data = [json copy];
    }
    return self;
}

- (NSString *)baseImageURL;
{
    return nil;
}

- (Artist *)artist;
{
    return [[Artist alloc] initWithJSON:self.data[@"artist"]];
}

- (NSDate *)date;
{
    return nil;
}

- (NSString *)title;
{
    return self.data[@"title"];
}

- (NSString *)saleMessage;
{
    return self.data[@"sale_message"];
}

- (CGFloat)aspectRatio;
{
    return [self.data[@"aspect_ratio"] floatValue];
}

@end
