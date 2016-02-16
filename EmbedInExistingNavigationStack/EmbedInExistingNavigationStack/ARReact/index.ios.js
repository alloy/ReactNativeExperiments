'use strict';

var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  NativeModules
} = React;

// TODO: I tried adding the components dir to the package manager with the `--root` option,
//       but to no avail, so using this relative style for now.
var ARArtworkComponent = require('../ARComponents/ARArtworkComponent');
console.log(ARArtworkComponent);

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  imageContainer: {
    flexDirection: 'column',
    //flexDirection: 'row',
    width: 150,
    //height: 100,
  },
});

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

  render() {
    let artwork = {
      title: "Some Title",
      sale_message: "Gazillion $",
      image: {
        url: "https://d32dm0rphc51dk.cloudfront.net/utKCPzmMuvXXb_x-beMWZQ/tall.jpg",
        aspect_ratio: 0.66538461538462,
      },
      artist: {
        name: "Salvador Dali",
      },
      partner: {
        name: "Sotheby’s",
      },
    };
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.pushReactViewController.bind(this)}>
          <Text>Tap to add a React VC to the navigation stack.</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pushNativeViewController.bind(this)}>
          <Text>Tap to add a Native VC to the navigation stack.</Text>
        </TouchableHighlight>
        <View style={styles.imageContainer}>
          <ARArtworkComponent artwork={artwork} />
        </View>
      </View>
    );
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
