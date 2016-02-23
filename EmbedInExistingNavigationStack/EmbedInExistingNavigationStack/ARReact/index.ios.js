'use strict';

var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  NativeModules,
} = React;


//{
//  artist(id: "banksy") {
//    artworks(size: 10) {
//      title
//      sale_message
//      image {
//        aspect_ratio
//        // This is for retina, we display at 120 width
//        resized(width: 240) {
//          url
//        }
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

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});




// TODO: I tried adding the components dir to the package manager with the `--root` option,
//       but to no avail, so using this relative style for now.
//let ARMasonryGridComponent = require('../ARComponents/ARMasonryGridComponent');
//let ARMasonry = require('../ARComponents/ARNativeEigenMasonryGridComponent');
//ARMasonry();
let ARArtworksMasonryGrid = require('../ARComponents/ARArtworksMasonryGridComponent');


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
        <TouchableHighlight onPress={this.pushReactViewController.bind(this)}>
          <Text>Tap to add a React VC to the navigation stack.</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.pushNativeViewController.bind(this)}>
          <Text>Tap to add a Native VC to the navigation stack.</Text>
        </TouchableHighlight>
          <ARArtworksMasonryGrid style={{flex: 1}} artworks={artworks} rank={3} dimensionLength={120} itemMargins={{ width: 20, height: 10 }} />
          <Text>This should be just below the grid!</Text>
      </View>
    );
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
