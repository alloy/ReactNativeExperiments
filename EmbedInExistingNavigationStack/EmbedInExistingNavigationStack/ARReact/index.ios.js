'use strict';




import Relay from 'react-relay';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://metaphysics-staging.artsy.net')
);

// if (!__DEV__) {
//   Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('https://metaphysics-staging.artsy.net'));
// } else {
//   let printRelayQuery = require('react-relay/lib/printRelayQuery');
//   class DebugNetworkLayer extends Relay.DefaultNetworkLayer {
//     sendQueries(requests) {
//       requests.forEach(request => {
//         let originalResolve = request.resolve;
//         request.resolve = data => {
//           console.log(data);
//           originalResolve(data);
//         }
//         console.log('[RELAY Request] ' + printRelayQuery(request._query).text);
//       })
//       return super.sendQueries(requests);
//     }
//   }
//   Relay.injectNetworkLayer(new DebugNetworkLayer('https://metaphysics-staging.artsy.net'));
// }




class ArtistRoute extends Relay.Route {
  static queries = {
    artist: () => Relay.QL`
      query { artist(id: $artistID) }
    `,
  };

  static paramDefinitions = {
    artistID: { required: true },
  };

  static routeName = 'ArtistRoute';
}

let banksyRoute = new ArtistRoute({ artistID: 'banksy' });




import React, {
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  NativeModules,
} from 'react-native';

// Disable the native polyfill during development, which will make network requests show-up in the Chrome dev-tools.
// Specifically, in our case, we get to see the Relay requests.
//
// It will be `undefined` unless running inside Chrome.
//
// See:
// * https://github.com/facebook/react-native/blob/2d0051f21371e8a51fde836c62a474a941023dd4/Libraries/JavaScriptAppEngine/Initialization/InitializeJavaScriptAppEngine.js#L41-L56
// * https://github.com/facebook/react-native/issues/934
//
if (__DEV__ && global.originalXMLHttpRequest != undefined) {
  global.XMLHttpRequest = global.originalXMLHttpRequest;
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});




// TODO: I tried adding the components dir to the package manager with the `--root` option,
//       but to no avail, so using this relative style for now.
import ARArtworksMasonryGrid from '../ARComponents/ARArtworksMasonryGridComponent';
//debugger;



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

        {/* This makes the collection view have the full content height, so the label underneath is shown when scrolled to the bottom.
        <ScrollView>
          <ARArtworksMasonryGrid artist={this.props.artist} rank={3} dimensionLength={120} itemMargins={{ width: 20, height: 10 }} />
          <Text>This should be just below the grid!</Text>
        </ScrollView>
        */}

        {/* This makes the collection view have a height of 300 points, and shows the label directly underneath it.
        <ARArtworksMasonryGrid style={{ height: 300 }} artist={this.props.artist} rank={3} dimensionLength={120} itemMargins={{ width: 20, height: 10 }} />
        <Text>This should be just below the grid!</Text>
        */}

        {/* This makes the collection view fill the available height, while leaving place for the label underneath it.
        <ARArtworksMasonryGrid style={{ flex: 1 }} artist={this.props.artist} rank={3} dimensionLength={120} itemMargins={{ width: 20, height: 10 }} />
        <Text>This should be just below the grid!</Text>
        */}

      </View>
    );
  }
}

let SimpleAppContainer = Relay.createContainer(SimpleApp, {
  fragments: {
    artist: () => Relay.QL`
      fragment on Artist {
        ${ARArtworksMasonryGrid.getFragment('artist')}
      }
    `,
  }
});

class SimpleRelayApp extends React.Component {
  render() {
    return <Relay.RootContainer Component={SimpleAppContainer} route={banksyRoute} />;
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleRelayApp);
