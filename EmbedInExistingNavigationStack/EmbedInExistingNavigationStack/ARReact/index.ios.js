'use strict';



//{
//  artist(id: "banksy") {
//    artworks(size: 10) {
//      title
//      sale_message
//      image {
//        url
//        aspect_ratio
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

let artworks = [
  {
    "title": "Radar Rat",
    "sale_message": "£20,000 - 30,000",
    "image": {
      "url": "https://d32dm0rphc51dk.cloudfront.net/ohPRSVAsWeXR55Iv-dxEvw/tall.jpg",
      "aspect_ratio": 1
    },
    "artist": {
      "name": "Banksy"
    },
    "partner": {
      "name": "Gallery Nosco"
    }
  },
  //{
    //"title": "CHAMPAGNE FORMICA FLAG",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/08yIgFpiD7kOr_EWsbMubQ/tall.jpg",
      //"aspect_ratio": 1.29
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Gallery Nosco"
    //}
  //},
  //{
    //"title": "Blowpop Records",
    //"sale_message": "Contact For Price",
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/H-KoAx18Sq6UFiwMjmTtPw/normalized.jpg",
      //"aspect_ratio": 1
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Julien's Auctions: Street Art Now February 2016"
    //}
  //},
  //{
    //"title": "Vettriano, Beach Rescue",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/DH1GuPHEOITaSFgEjOLhTA/tall.jpg",
      //"aspect_ratio": 1.25
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //},
  //{
    //"title": "Girl and Balloon (Diptych)",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/2i8Rw4xP9x-3PLeLRvYaSw/tall.jpg",
      //"aspect_ratio": 0.97
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //},
  //{
    //"title": "Kids on Guns",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/WgNYm-T_7permhh7yrcA4Q/tall.jpg",
      //"aspect_ratio": 1.01
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //},
  //{
    //"title": "The Key to Making Great Art is all in the Composition",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/f9_pLsTq_pAZnYTdXnw_cQ/tall.jpg",
      //"aspect_ratio": 1
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //},
  //{
    //"title": "Graffiti Cottage",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/tNtyTyg30oawwsYszmEiQQ/tall.jpg",
      //"aspect_ratio": 1.16
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //},
  //{
    //"title": "Keep It Real",
    //"sale_message": null,
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/N3Jzl43P03wezA3KGKhOwA/tall.jpg",
      //"aspect_ratio": 0.88
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //},
  //{
    //"title": "Kissing Coppers",
    //"sale_message": "Contact For Price",
    //"image": {
      //"url": "https://d32dm0rphc51dk.cloudfront.net/O1M6sRtdF_r5OcGeZmsU4A/tall.jpg",
      //"aspect_ratio": 0.81
    //},
    //"artist": {
      //"name": "Banksy"
    //},
    //"partner": {
      //"name": "Lazarides"
    //}
  //}
];



var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View,
  NativeModules
} = React;


// TODO: I tried adding the components dir to the package manager with the `--root` option,
//       but to no avail, so using this relative style for now.
let ARArtworkComponent = require('../ARComponents/ARArtworkComponent');
let ARMasonryGridComponent = require('../ARComponents/ARMasonryGridComponent');


var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  imageContainer: {
    flexDirection: 'column',
    //flexDirection: 'row',
    width: 150,
    //height: 100,
  },
});


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
        <ARMasonryGridComponent artworks={artworks} />
      </View>
    );
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
