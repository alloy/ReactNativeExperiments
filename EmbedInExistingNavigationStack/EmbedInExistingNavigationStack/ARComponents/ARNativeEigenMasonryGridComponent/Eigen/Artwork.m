//
//  Artwork.m
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import "Artwork.h"

static id
ValueOrNil(id value) {
  return value != nil && value != [NSNull null] ? value : nil;
}

@interface Artwork ()
@property (nonatomic, copy) NSDictionary *data;
@end

@implementation Artwork

- (instancetype)initWithDictionary:(NSDictionary *)data;
{
    if ((self = [super init])) {
        _data = data;
    }
    return self;
}

- (NSString *)baseImageURL;
{
    return nil;
}

- (NSURL *)imageURL;
{
    return [NSURL URLWithString:self.data[@"image"][@"url"]];
}

- (Artist *)artist;
{
    return [[Artist alloc] initWithDictionary:self.data[@"artist"]];
}

- (NSDate *)date;
{
    return nil;
}

- (NSString *)title;
{
    return ValueOrNil(self.data[@"title"]);
}

- (NSString *)saleMessage;
{
    return ValueOrNil(self.data[@"sale_message"]);
}

- (CGFloat)aspectRatio;
{
    NSNumber *aspectRatio = self.data[@"image"][@"aspect_ratio"];
    return ValueOrNil(aspectRatio) ? aspectRatio.floatValue : 1;
}

@end
