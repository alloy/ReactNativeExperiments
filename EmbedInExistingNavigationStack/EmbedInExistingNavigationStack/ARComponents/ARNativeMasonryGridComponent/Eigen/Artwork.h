//
//  Artwork.h
//  EmbedInExistingNavigationStack
//
//  Created by Eloy Durán on 18/02/16.
//  Copyright © 2016 Artsy. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ARHasImageBaseURL.h"
#import "Artist.h"

@interface Artwork : NSObject <ARHasImageBaseURL>
- (instancetype)initWithJSON:(NSDictionary *)json;
- (Artist *)artist;
- (NSDate *)date;
- (NSString *)title;
- (NSString *)saleMessage;
- (CGFloat)aspectRatio;
@end
