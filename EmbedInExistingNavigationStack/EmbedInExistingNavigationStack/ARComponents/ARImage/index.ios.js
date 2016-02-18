'use strict';

var React = require('react-native');

var { requireNativeComponent } = React;

class ARImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'grey',
    };

    this.onImageLayout = this.onImageLayout.bind(this);
  }

  // Only change the state if either of the dimensions has not been calculated yet.
  //
  // TODO: dynamically calculate the aspect ratio by asking the native image?
  //
  onImageLayout(event: LayoutEvent) {
    let layout = event.nativeEvent.layout;
    if (layout.width > 0 && layout.height > 0) {
      let onImageLayout = this.props.onImageLayout;
      if (onImageLayout != undefined) {
        onImageLayout(layout);
      }
    } else if (layout.width > 0) {
      let height = layout.width / this.props.aspectRatio;
      this.setState({ width: layout.width, height: height });
    } else if (layout.height > 0) {
      let width = layout.height * this.props.aspectRatio;
      this.setState({ width: width, height: layout.height });
    }
  }

  render() {
    return <ARNativeImage style={this.state} onLayout={this.onImageLayout} {...this.props} />;
  }
}

ARImage.propTypes = {
    /**
     * A URL string.
     */
    source: React.PropTypes.string,

    /**
     * An aspect ratio created with: width / height
     */
    aspectRatio: React.PropTypes.number,
};

var ARNativeImage = requireNativeComponent('ARImageView', ARImage);
module.exports = ARImage;
