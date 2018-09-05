import React, { Component } from 'react';
import { View,asset,AppRegistry  } from 'react-360';
import Entity from 'Entity'
export default class Letter extends Component {
  render() {
    return (
      <View>
        <Entity style={{
          transform: [{translate: [180, -170,-80]}, {rotateY: '300deg'}]
        }} source={{obj: asset('obj/Placa01.obj'), mtl: asset('obj/Placa01.mtl')}} />
      </View>
    )
  }
}
AppRegistry.registerComponent('letter', () => Letter);
