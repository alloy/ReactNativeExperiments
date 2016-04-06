'use strict';

// Scrolling enabled/disabled:
//
// * By default, the grid will assign itself a height that fits all of the content, in which case scrolling is
//   automatically disabled.
//
// * If a height is assigned (either through a `height` style or a `flex` style) that does *not* fit all of the grid’s
//   content, scrolling is enabled.
//
//
// TODO:
//
// * Test when appending more artwork data.
//
// * Test when assigning completely new artwork data.
//
// * Allow explicit scroll disabling?
//
// * Make using `contentInset: React.PropTypes.EdgeInsetsPropType` work.
//
// * See if we can auto-generate model-ish objc code based on the GraphQL schema that a component uses (i.e. propTypes).
//   Which can be used by the native component code to make using the JSON payloads easier.
//
// * Figure out why `export { ARArtworksMasonryGrid }` did not work.
//

import React from 'react-native';
import Relay from 'react-relay';

var NativeGrid = React.requireNativeComponent('ARArtworksMasonryGridComponent', ARArtworksMasonryGrid);

class ARArtworksMasonryGrid extends React.Component {
  static propTypes = {
    artist: React.PropTypes.shape({
      artworks: React.PropTypes.arrayOf(React.PropTypes.shape({
        title: React.PropTypes.string,
        sale_message: React.PropTypes.string,
        image: React.PropTypes.shape({
          url: React.PropTypes.string,
          // TODO: The React convention seems to be to use camelCase, but metaphysics uses snake_case.
          aspect_ratio: React.PropTypes.number,
        }),
        artist: React.PropTypes.shape({
          name: React.PropTypes.string,
        }),
        partner: React.PropTypes.shape({
          name: React.PropTypes.string,
        }),
      })),
    }),

    direction: React.PropTypes.number,
    rank: React.PropTypes.number,
    dimensionLength: React.PropTypes.number,
    contentInset: React.PropTypes.shape({ top: React.PropTypes.number, left: React.PropTypes.number, bottom: React.PropTypes.number, right: React.PropTypes.number }),
    itemMargins: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number,
    }),
  }

  render() {
    // Need to split this up, because the query fragment currently operates on the artist, not just artworks (see below)
    let { artist, ...props } = this.props;
    return <NativeGrid artworks={artist.artworks} {...props} />;
  }
}

export default Relay.createContainer(ARArtworksMasonryGrid, {
  initialVariables: {
    page: 1
  },

  prepareVariables({ page }) {
    return { size: page * 10 };
  },

  // TODO Can we have a fragment of just the artworks, instead of the artist with its artworks?
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        artworks(size: $size) {
          title
          sale_message
          image {
            aspect_ratio
            resized(width: 240) {
              url
            }
          }
          artist {
            name
          }
          partner {
            name
          }
        }
      }
    `,
  },
});
