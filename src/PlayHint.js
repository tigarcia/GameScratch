import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'
const Sound = require('react-native-sound');

export default class PlayHint extends Component {
  constructor(props) {
    super(props);
    this.sound = null;

    this.playCallback = this.playCallback.bind(this);
  }

  shouldComponentUpdate() {
    return false;
  }

  playCallback(success) {
    if (success) {
      this.props.onSongDone();
    } else {
      console.warn("Song did not play properly");
    }
  }

  componentDidMount() {
    if (this.sound) {
      this.sound.stop();
      this.sound.release();
    }
    this.sound = new Sound(this.props.audioFile,
      this.props.audioPath,
      (e) => {
        if (e) {
          console.warn('error', e);
        } else {
          this.sound.play(this.playCallback);
        }
    });
  }

  componentWillUnmount() {
    if (this.sound) {
      this.sound.stop();
      this.sound.release();
    }
  }

  render() {
    return (
      <View />
    );
  }
}

