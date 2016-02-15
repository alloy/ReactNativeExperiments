'use strict';

var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  NativeModules
} = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class SimpleApp extends React.Component {
  _onPressButton() {
      console.log('Host VC: 0x' + this.props.viewControllerID.toString(16));
      NativeModules.ARNavigatorModule.pushViewController('/react-native-controller',
                                                         true,
                                                         this.props.viewControllerID);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
            <Text>Tap to add a VC to the navigation stack.</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);