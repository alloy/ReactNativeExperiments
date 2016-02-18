'use strict';

var React = require('react-native');

var { View, requireNativeComponent } = React;

class ARImage extends React.Component {
  static defaultProps = {
    aspectRatio: 1,
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

  render() {
    return (
      <View onLayout={this.onLayout} accessibilityLabel='ARImage Container'>
        <ARNativeImage style={this.state} {...this.props} />
      </View>
    );
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

