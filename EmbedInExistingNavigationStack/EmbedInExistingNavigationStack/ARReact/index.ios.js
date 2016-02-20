'use strict';

var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  NativeModules
} = React;


//{
//  artist(id: "banksy") {
//    artworks(size: 10) {
//      title
//      sale_message
//      image {
//        url
//        aspect_ratio
//      }
//      artist {
//        name
//      }
//      partner {
//        name
//      }
//    }
//  }
//}
let artworks = require('./artworks.json');


// TODO: I tried adding the components dir to the package manager with the `--root` option,
//       but to no avail, so using this relative style for now.
let ARArtworkComponent = require('../ARComponents/ARArtworkComponent');
//let ARMasonryGridComponent = require('../ARComponents/ARMasonryGridComponent');
let ARMasonry = require('../ARComponents/ARNativeMasonryGridComponent');


var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});


class ARArtworkMasonryGridCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loadImage: false };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ loadImage: !event.nativeEvent.cellIsHidden });
  }

  render() {
    return <ARMasonry.Cell onChange={this.onChange}><ARArtworkComponent loadImage={this.state.loadImage} artwork={this.props.artwork} /></ARMasonry.Cell>;
  }
}


class SimpleApp extends React.Component {
  pushReactViewController() {
    console.log('Host VC: 0x' + this.props.viewControllerID.toString(16));
    NativeModules.ARNavigatorModule.pushViewController('/react-controller',
                                                       true,
                                                       this.props.viewControllerID);
  }

  pushNativeViewController() {
    console.log('Host VC: 0x' + this.props.viewControllerID.toString(16));
    NativeModules.ARNavigatorModule.pushViewController('/native-controller',
                                                       true,
                                                       this.props.viewControllerID);
  }

  renderArtworks() {
    return artworks.map(function(artwork, key) {
      return (
        <ARArtworkMasonryGridCell artwork={artwork} key={key} />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.pushReactViewController.bind(this)}>
          <Text>Tap to add a React VC to the navigation stack.</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pushNativeViewController.bind(this)}>
          <Text>Tap to add a Native VC to the navigation stack.</Text>
        </TouchableHighlight>
        <ARMasonry.Grid style={{height: 300}} rank={3} itemMargins={{ width: 10, height: 20 }}>
          {this.renderArtworks()}
        </ARMasonry.Grid>
        <Text>This should be just below the grid!</Text>
      </View>
    );
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
