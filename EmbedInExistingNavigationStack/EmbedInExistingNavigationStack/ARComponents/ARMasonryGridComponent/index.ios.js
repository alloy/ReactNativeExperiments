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
    itemMargin: 8,
  }

  constructor(props) {
    super(props);
    this.renderPass = 0;
    this.state = { sectionDimension: 0 };
    this.onLayout = this.onLayout.bind(this);
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

  renderSections() {
    console.log('RENDER SECTIONS!');

    let sectionedArtworks = [];
    for (var i = 0; i < this.props.sectionCount; i++) {
      sectionedArtworks.push([]);
    };
    // TODO: This needs to perform layouting, i.e. in which section an artwork should go
    for (var i = 0; i < this.props.artworks.length; i++) {
      let section = sectionedArtworks[i % this.props.sectionCount];
      section.push(this.props.artworks[i]);
    }

    let spacerStyle = {
      height: this.props.itemMargin,
      // TODO: For debugging only
      backgroundColor: 'yellow',
    };

    let sections = [];
    for (var i = 0; i < this.props.sectionCount; i++) {
      let artworkComponents = [];
      let artworks = sectionedArtworks[i];
      for (var j = 0; j < artworks.length; j++) {
        artworkComponents.push(<ARArtworkComponent artwork={artworks[j]} key={'artwork-'+j} />);
        // TODO: Setting a marginBottom on the artwork component didn’t work, so using a spacer view for now.
        if (j < artworks.length-1) {
          artworkComponents.push(<View style={spacerStyle} key={'spacer-'+j} accessibilityLabel='Spacer View' />);
        }
      }

      let style = {
        flexDirection: 'column',
        width: this.state.sectionDimension,
        marginRight: (i == this.props.sectionCount-1 ? 0 : this.props.sectionMargin), // TODO: No built-in flex way to do this?
        // TODO: For debugging only
        backgroundColor: ['red', 'blue'][i],
      };
      sections.push(
        <View style={style} key={i} accessibilityLabel={'Section ' + i}>
          {artworkComponents}
        </View>
      );
    }
    return sections;
  }

  render() {
    this.renderPass++;
    console.log('RENDER PASS: ' + this.renderPass, this.state);

    let style = {
      flexDirection: 'row',
      // TODO: For debugging only
      backgroundColor: 'yellow',
    };

    let artworks = this.state.sectionDimension ? this.renderSections() : null;
    return (
      <ScrollView onLayout={this.onLayout} accessibilityLabel='ARMasonryGrid ScrollView'>
        <View style={style} accessibilityLabel='ARMasonryGrid Content View'>
          {artworks}
        </View>
      </ScrollView>
    );
  }
}

module.exports = ARMasonryGridComponent;

