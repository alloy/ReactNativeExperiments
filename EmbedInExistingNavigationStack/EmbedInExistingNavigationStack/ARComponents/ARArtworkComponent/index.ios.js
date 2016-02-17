'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;

var ARImage = require('../ARImage');

class ARArtworkComponent extends React.Component {
  render() {
    return (
      <View>
        <ARImage aspectRatio={this.props.artwork.image.aspect_ratio} source={this.props.artwork.image.url} />
        <Text>{this.props.artwork.artist.name}</Text>
        <Text>{this.props.artwork.title}</Text>
        <Text>{this.props.artwork.partner.name}</Text>
        <Text>{this.props.artwork.sale_message}</Text>
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
