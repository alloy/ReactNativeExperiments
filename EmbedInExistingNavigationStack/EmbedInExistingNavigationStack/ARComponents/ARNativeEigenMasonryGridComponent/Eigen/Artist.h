//
//  Artist.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Artist : NSObject
- (instancetype)initWithDictionary:(NSDictionary *)data;
- (NSString *)name;
@end
