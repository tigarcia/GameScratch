import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'
const Sound = require('react-native-sound');

export default class PlayHint extends Component {

  componentDidMount() {
    const s = new Sound('audio.m4a', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        //s.setSpeed(1);
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  }
  render() {
    return (
      <View>
        <Text>Yolo</Text>
      </View>
    );
  }


}