'use strict';

var React = require('react-native');
var {
  Text,
  View,
} = React;

var ARImage = require('../ARImage');

class ARArtworkComponent extends React.Component {
  render() {
    let artwork = this.props.artwork;
    let optionals = [];
    // TODO partner ?
    if (artwork.sale_message) {
      optionals.push(<Text key="sale_message">{this.props.artwork.sale_message}</Text>);
    }
    return (
      <View>
        <ARImage loadImage={this.props.loadImage} style={{ backgroundColor: 'grey' }} aspectRatio={artwork.image.aspect_ratio} source={artwork.image.url} />
        <Text>{artwork.artist.name}</Text>
        <Text>{artwork.title}</Text>
        <Text>{artwork.partner.name}</Text>
        {optionals}
      </View>
    );
  }
};

ARArtworkComponent.propTypes = {
  loadImage: React.PropTypes.bool,
  artwork: React.PropTypes.shape({
    title: React.PropTypes.string,
    sale_message: React.PropTypes.string,
    image: React.PropTypes.shape({
      url: React.PropTypes.string,
      // TODO: The React convention seems to be to use cameCase, but metaphysics uses snake_case.
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
