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
var ARImage = require('../ARComponents/ARImage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  imageContainer: {
    //flexDirection: 'column',
    flexDirection: 'row',
    width: 100,
    height: 100,
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
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ARImage aspectRatio={0.66538461538462} source="https://d32dm0rphc51dk.cloudfront.net/utKCPzmMuvXXb_x-beMWZQ/tall.jpg" />
        </View>
        <TouchableHighlight onPress={this.pushReactViewController.bind(this)}>
            <Text>Tap to add a React VC to the navigation stack.</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pushNativeViewController.bind(this)}>
            <Text>Tap to add a Native VC to the navigation stack.</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
