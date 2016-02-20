'use strict';

import * as React from 'react-native';

// TODO
//
// * Currently have to set a height style on the grid, because RN would make it as tall as all the cells stacked.
//   Might need to create a shadow view for the grid which overrides that to just fill the superview, like a scrollview
//   would do.
//
// * Rename:
//   - ARMasonryGridCell -> ARMasonryGridCellWrapper
//   - ARMasonryGridCellEventReceiver -> ARMasonryGridCell
//

var NativeCell = React.requireNativeComponent('ARMasonryGridCell', null);
var NativeCellEventReceiver = React.requireNativeComponent('ARMasonryGridCellEventReceiver', Cell);
var NativeGrid = React.requireNativeComponent('ARMasonryGridView', Grid);

class Cell extends NativeCellEventReceiver {
  static propTypes = {
    onChange: React.PropTypes.func,
  }

  render() {
    return this.props.children;
  }
}

class Grid extends React.Component {
  static verticalDirection = NativeGrid.verticalDirection;
  static horizontalDirection = NativeGrid.horizontalDirection;

  static propTypes = {
    direction: React.PropTypes.number,
    rank: React.PropTypes.number,
    dimensionLength: React.PropTypes.number,
    // TODO how to import this?
    //contentInset: React.PropTypes.EdgeInsetsPropType,
    contentInset: React.PropTypes.shape({ top: React.PropTypes.number, left: React.PropTypes.number, bottom: React.PropTypes.number, right: React.PropTypes.number }),
    itemMargins: React.PropTypes.shape({
      width: React.PropTypes.number,
      height: React.PropTypes.number,
    }),
  }

  static defaultProps = {
    direction: this.verticalDirection,
    rank: 2,
    dimensionLength: 0, // ARCollectionViewMasonryLayout uses 120, but I think we should auto-calculate it here.
    contentInset: { top: 0, left: 0, bottom: 0, right: 0 },
    itemMargins: { width: 0, height: 0 },
  }

  constructor(props) {
    super(props);
    this.state = { dimensionLength: this.props.dimensionLength };
    this.onLayout = this.onLayout.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  onLayout(event: LayoutEvent) {
    let layout = event.nativeEvent.layout;
    if (layout.width > 0) {
      // TODO Something here isn’t working right.
      // 
      // This is the sum of all margins in between sections, so do not count to the right of last column.
      let margin = this.props.itemMargins.width * (this.props.rank - 1);
      this.setState({ dimensionLength: (layout.width - margin) / this.props.rank });
    }
  }

  renderChildren() {
    let style = { width: this.state.dimensionLength };
    return React.Children.map(this.props.children, function(child, key) {
      return <NativeCell style={style} key={key}>{child}</NativeCell>;
    }.bind(this));
  }

  render() {
    var cells = null;
    var onLayout = null;
    if (this.state.dimensionLength > 0) {
      cells = this.renderChildren();
    } else {
      // Auto-calculate the dimensionLength based on rank and width of the grid view.
      onLayout = this.onLayout;
    }

    let { dimensionLength, ...other } = this.props;
    return <NativeGrid onLayout={onLayout} dimensionLength={this.state.dimensionLength} {...other}>{cells}</NativeGrid>;
  }
}

export { Grid, Cell };

