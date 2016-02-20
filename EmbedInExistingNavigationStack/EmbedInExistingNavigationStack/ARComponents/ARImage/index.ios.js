'use strict';

var React = require('react-native');

var { View, requireNativeComponent } = React;

class ARImage extends React.Component {
  static defaultProps = {
    aspectRatio: 1,
    loadImage: true,
  }

  render() {
    let { aspectRatio, ...other } = this.props;
    return <ARNativeImage aspectRatio={aspectRatio || 1} {...other} accessibilityLabel='ARImage' />;
  }
}

ARImage.propTypes = {
    /**
     * A URL string.
     */
    source: React.PropTypes.string.isRequired,

    /**
     * An aspect ratio created with: width / height
     */
    aspectRatio: React.PropTypes.number,

    /**
     * Whether or not to actually load the image or to just layout the view.
     * Defaults to `true`.
     */
    loadImage: React.PropTypes.bool,
};

var ARNativeImage = requireNativeComponent('ARImageView', ARImage);
module.exports = ARImage;

