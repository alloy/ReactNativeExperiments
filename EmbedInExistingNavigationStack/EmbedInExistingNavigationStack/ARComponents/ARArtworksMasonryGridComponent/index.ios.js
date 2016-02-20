'use strict';

import * as React from 'react-native';

var NativeGrid = React.requireNativeComponent('ARArtworksMasonryGridComponent', ARArtworksMasonryGrid);

class ARArtworksMasonryGrid extends React.Component {
  static propTypes = {
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

    direction: React.PropTypes.number,
    rank: React.PropTypes.number,
    dimensionLength: React.PropTypes.number,
    // TODO how to import this?
    //contentInset: React.PropTypes.EdgeInsetsPropType,
    contentInset: React.PropTypes.shape({ top: React.PropTypes.number, left: React.PropTypes.number, bottom: React.PropTypes.number, right: React.PropTypes.number }),
    itemMargins: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number,
    }),
  }

  render() {
    return <NativeGrid {...this.props} />;
  }
}

// TODO Why did this not work? export { ARArtworksMasonryGrid };
module.exports = ARArtworksMasonryGrid;

