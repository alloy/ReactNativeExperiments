'use strict';

// 1. Get first layout pass of grid view so we have a total width and calculate the column width (componentDidMount?).
// 2. Possibly do artwork column layout now, as we can do so based just on the aspect ratio, assuming the text height
//    won't be too different between artworks.
// 3. Get artwork heights by either:
//    - calculating the item size upfront with aspect ratio and a static height for the text labels.
//    - leting the artwork component do a layout pass and calculate its own height based on the column width.
// 4. Update height of grid to encompass all items.

let React = require('react-native');
let ARArtworkComponent = require('../ARArtworkComponent');

let {
  View,
  ScrollView
} = React;

// TODO currently all the code assumes column layout.
//
class ARMasonryGridComponent extends React.Component {
  static defaultProps = {
    sectionDirection: 'column',
    sectionCount: 2,
    sectionMargin: 8,
  }

  constructor(props) {
    super(props);
    this.renderPass = 0;
    this.state = { sectionDimension: 0 };
    this.onLayout = this.onLayout.bind(this);
    //this.onArtworkLayout = this.onArtworkLayout.bind(this);
  }

  // TODO: Currently settings this from the scrollview’s onLayout prop,
  //       shouldn’t this be possible to set on `this` component instead?
  //
  onLayout(event: LayoutEvent) {
    let layout = event.nativeEvent.layout;
    console.log('GRID LAYOUT', layout);
    if (layout.width > 0) {
      // This is the sum of all margins in between sections, so do not count to the right of last column.
      let sectionMargins = this.props.sectionMargin * (this.props.sectionCount - 1);
      this.setState({ sectionDimension: (layout.width - sectionMargins) / this.props.sectionCount });
    }
  }

  //getAutoResponsiveProps() {
    //return {
      //itemMargin: 8
    //};
  //}

  //onArtworkLayout(layout, key) {
    //if (this.state.itemStyle.width > 0) {
      //console.log('onArtworkLayout');
      //this.state.artworkStyles[key] = { width: this.state.itemStyle.width, height: layout.height };
      //console.log(this.state.artworkStyles);
      //this.forceUpdate();
    //}
  //}

  //renderChildren() {
    //if (this.state.itemStyle.width == 0) {
      //return;
    //}
    //return this.props.artworks.map(function(artwork, key) {
      //var onArtworkLayout = undefined;
      //var style = this.state.artworkStyles[key];
      //if (style == undefined) {
        //style = this.state.itemStyle;
        //onArtworkLayout = function(layout) { this.onArtworkLayout(layout, key) }.bind(this);
      //} else {
        //console.log('HAVE ALL DIMENSIONS FOR: ', key, style);
      //}
      //console.log('STYLE', style);
      //return (
        //<ARArtworkComponent onArtworkLayout={onArtworkLayout} style={style} artwork={artwork} key={key} />
      //);
    //}, this);
  //}

  renderSections() {
    console.log('RENDER SECTIONS!');

    let sectionedArtworks = [];
    for (var i = 0; i < this.props.sectionCount; i++) {
      sectionedArtworks.push([]);
    };
    // TODO: This needs to perform layouting.
    for (var i = 0; i < this.props.artworks.length; i++) {
      let section = sectionedArtworks[i % this.props.sectionCount];
      section.push(this.props.artworks[i]);
    }

    let sections = [];
    for (var i = 0; i < this.props.sectionCount; i++) {
      let artworkComponents = sectionedArtworks[i].map(function(artwork, key) {
        return <ARArtworkComponent artwork={artwork} key={key} />;
      });

      let style = {
        width: this.state.sectionDimension,
        marginRight: (i == this.props.sectionCount-1 ? 0 : this.props.sectionMargin), // TODO: No built-in flex way to do this?
        // These are for debugging only
        height: 200,
        backgroundColor: ['red', 'blue'][i],
      };
      sections.push(
        <View style={style} key={i}>
          {artworkComponents}
        </View>
      );
    }
    return sections;
  }

  render() {
    this.renderPass++;
    console.log('RENDER PASS: ' + this.renderPass, this.state);

    let artworks = this.state.sectionDimension ? this.renderSections() : null;
    return (
      <ScrollView onLayout={this.onLayout}>
        <View style={{ flexDirection: 'row' }}>
          {artworks}
        </View>
      </ScrollView>
    );
  }
}

module.exports = ARMasonryGridComponent;

