'use strict';

var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  NativeModules
} = React;


var Navigator = NativeModules.ARNavigatorModule;
console.log(Navigator);

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class SimpleApp extends React.Component {
  _onPressButton() {
      console.log('Host VC: 0x' + this.props.viewControllerID.toString(16));
      Navigator.pushViewController('/react-native-controller', true, this.props.viewControllerID);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a simple application:{this.props.text}</Text>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
            <Text>CLICK to add VC to navigation stack</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);