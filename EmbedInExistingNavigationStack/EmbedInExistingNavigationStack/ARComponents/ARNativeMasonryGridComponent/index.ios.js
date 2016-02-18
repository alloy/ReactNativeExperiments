'use strict';

let React = require('react-native');
var { requireNativeComponent } = React;

class ARMasonryGridComponent extends React.Component {
  render() {
    return <ARNativeMasonryGrid {...this.props} />
  }
}

ARMasonryGridComponent.propTypes = {
  artworks: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    sale_message: React.PropTypes.string,
    image: React.PropTypes.shape({
      url: React.PropTypes.string,
      aspect_ratio: React.PropTypes.number,
    }),
    artist: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
    partner: React.PropTypes.shape({
      name: React.PropTypes.string,
    }),
  })),
}

var ARNativeMasonryGrid = requireNativeComponent('ARMasonryGridView', ARMasonryGridComponent);
module.exports = ARMasonryGridComponent;

