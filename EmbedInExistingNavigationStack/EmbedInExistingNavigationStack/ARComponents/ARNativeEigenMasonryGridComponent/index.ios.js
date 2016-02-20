'use strict';

import * as React from 'react-native';

var NativeGrid = React.requireNativeComponent('AREigenMasonryGridView', Grid);

export class Grid extends React.Component {
  render() {
    return <NativeGrid style={{height: 300}} {...this.props} />;
  }
}

