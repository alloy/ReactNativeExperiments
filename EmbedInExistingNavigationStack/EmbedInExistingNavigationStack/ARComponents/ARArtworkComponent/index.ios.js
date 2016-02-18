'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;

var ARImage = require('../ARImage');

class ARArtworkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { didLayoutImage: false };
    this.onLayout = this.onLayout.bind(this);
    this.onImageLayout = this.onImageLayout.bind(this);
  }

  onImageLayout() {
    this.state.didLayoutImage = true;
  }

  onLayout(event) {
    if (this.state.didLayoutImage) {
      let onArtworkLayout = this.props.onArtworkLayout;
      if (onArtworkLayout != undefined) {
        onArtworkLayout(event.nativeEvent.layout)
      }
    }
  }

  render() {
    let onLayout = this.props.onArtworkLayout == undefined ? undefined : this.onLayout;
    let artwork = this.props.artwork;
    let optionals = [];
    // TODO partner ?
    if (artwork.sale_message) {
      optionals.push(<Text key="sale_message">{this.props.artwork.sale_message}</Text>);
    }
    return (
      <View onLayout={onLayout}>
        <ARImage onImageLayout={this.onImageLayout} aspectRatio={artwork.image.aspect_ratio} source={artwork.image.url} />
        <Text>{artwork.artist.name}</Text>
        <Text>{artwork.title}</Text>
        <Text>{artwork.partner.name}</Text>
        {optionals}
      </View>
    );
  }
};

ARArtworkComponent.propTypes = {
  artwork: React.PropTypes.shape({
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
  }),
};

module.exports = ARArtworkComponent;
