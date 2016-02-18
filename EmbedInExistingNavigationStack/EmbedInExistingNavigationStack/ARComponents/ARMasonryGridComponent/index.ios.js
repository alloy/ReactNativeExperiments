'use strict';

// https://github.com/xudafeng/autoresponsive_react_native_sample

let React = require('react-native');
let AutoResponsive = require('autoresponsive-react-native');
let ARArtworkComponent = require('../ARArtworkComponent');

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
    this.state = { artworkStyles: {}, itemStyle: { width: 0, height: 0 }};
    this.onLayout = this.onLayout.bind(this);
    this.onArtworkLayout = this.onArtworkLayout.bind(this);
  }

  // TODO: Currently settings this from the scrollview’s onLayout prop,
  //       shouldn’t this be possible to set on `this` component instead?
  //
  onLayout(event: LayoutEvent) {
    console.log('GRID LAYOUT');
    let layout = event.nativeEvent.layout;
    console.log(layout);
    if (layout.width > 0 && this.props.sectionDirection == 'column') {
      this.setState({ itemStyle: { width: layout.width / this.props.sectionCount } });
    } else if (layout.height > 0 && this.props.sectionDirection == 'row') {
      // TODO: This needs to be tested
      this.setState({ itemStyle: { height: layout.height / this.props.sectionCount } });
    }
    console.log('GRID STATE: ', this.state);
  }

  getAutoResponsiveProps() {
    return {
      itemMargin: 8
    };
  }

  onArtworkLayout(layout, key) {
    if (this.state.itemStyle.width > 0) {
      console.log('onArtworkLayout');
      this.state.artworkStyles[key] = { width: this.state.itemStyle.width, height: layout.height };
      console.log(this.state.artworkStyles);
      this.forceUpdate();
    }
  }

  renderChildren() {
    if (this.state.itemStyle.width == 0) {
      return;
    }
    return this.props.artworks.map(function(artwork, key) {
      var onArtworkLayout = undefined;
      var style = this.state.artworkStyles[key];
      if (style == undefined) {
        style = this.state.itemStyle;
        onArtworkLayout = function(layout) { this.onArtworkLayout(layout, key) }.bind(this);
      } else {
        console.log('HAVE ALL DIMENSIONS FOR: ', key, style);
      }
      console.log('STYLE', style);
      return (
        <ARArtworkComponent onArtworkLayout={onArtworkLayout} style={style} artwork={artwork} key={key} />
      );
    }, this);
  }

  render() {
    return (
      <ScrollView onLayout={this.onLayout}>
      <AutoResponsive {...this.getAutoResponsiveProps()}>
        {this.renderChildren()}
      </AutoResponsive>
    </ScrollView>
    );
  }
}

module.exports = ARMasonryGridComponent;

