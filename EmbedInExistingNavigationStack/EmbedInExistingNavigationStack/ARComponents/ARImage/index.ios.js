'use strict';

var React = require('react-native');

var { View, requireNativeComponent } = React;

class ARImage extends React.Component {
  static defaultProps = {
    aspectRatio: 1,
    loadImage: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'grey',
    };
    this.onLayout = this.onLayout.bind(this);
  }

  // TODO: dynamically calculate the aspect ratio by asking the native image?
  //
  onLayout(event: LayoutEvent) {
    let layout = event.nativeEvent.layout;
    if (layout.width > 0) {
      let height = layout.width / this.props.aspectRatio;
      this.setState({ width: layout.width, height: height });
    } else if (layout.height > 0) {
      let width = layout.height * this.props.aspectRatio;
      this.setState({ width: width, height: layout.height });
    }
  }

  renderImage() {
    return <ARNativeImage style={this.state} {...this.props} />;
  }

  render() {
    let image = this.props.loadImage ? this.renderImage() : null;
    return (
      <View onLayout={this.onLayout} style={this.state} accessibilityLabel='ARImage Container'>
        {image}
      </View>
    );
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

