'use strict';

// https://github.com/xudafeng/autoresponsive_react_native_sample

let React = require('react-native');
let AutoResponsive = require('autoresponsive-react-native');

let {
  View,
  ScrollView,
} = React;

class ARMasonryGridComponent extends React.Component {
  static defaultProps = {
    sectionDirection: 'column',
    sectionCount: 2,
  }

  constructor(props) {
    super(props);
    this.state = { childDimensions: {}, itemStyle: { width: 0, height: 0 }};
    this.onLayout = this.onLayout.bind(this);
    this.onChildLayout = this.onChildLayout.bind(this);
  }

  // TODO: Currently settings this from the scrollview’s onLayout prop,
  //       shouldn’t this be possible to set on `this` component instead?
  //
  onLayout(event: LayoutEvent) {
    let layout = event.nativeEvent.layout;
    if (layout.width > 0 && this.props.sectionDirection == 'column') {
      this.setState({ itemStyle: { width: layout.width / this.props.sectionCount } });
    } else if (layout.height > 0 && this.props.sectionDirection == 'row') {
      // TODO: This needs to be tested
      this.setState({ itemStyle: { height: layout.height / this.props.sectionCount } });
    }
  }

  onChildLayout(event: LayoutEvent, childKey) {
    //console.log(event, key);
    let layout = event.nativeEvent.layout;
    this.state.childDimensions[childKey] = { width: layout.width, height: layout.height };
    console.log(layout);
    this.forceUpdate();
  }

  onContainerDidLayout() {
    console.log('Finished layout!');
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 8
    };
}

  bindChild(fn, key) {
    return function(event: LayoutEvent) {
      fn(event, key);
    };
  }

  renderChildren() {
    return React.Children.map(this.props.children, function(child, key) {
console.log('KEY: ', key);
      var onLayout = null;
      var size = this.state.childDimensions[key];
if (size == undefined || size.width == 0 || size.height == 0) {
        onLayout = this.bindChild(this.onChildLayout, key);
        size = this.state.itemStyle;
      }
      console.log('CHILD DIMENSIONS: ', size);
      return (
        <View onLayout={onLayout} style={size} key={key}>
          {child}
        </View>
      );
    }, this);
  }

  render() {
    return (
      <ScrollView onLayout={this.onLayout}>
        <AutoResponsive onContainerDidLayout={this.onContainerDidLayout} {...this.getAutoResponsiveProps()}>
          {this.renderChildren()}
        </AutoResponsive>
      </ScrollView>
    );
  }
}

module.exports = ARMasonryGridComponent;

