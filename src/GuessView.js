import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import GuessInput from './GuessInput'
import PlayHint from './PlayHint'

export default class GuessView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const message = this.props.guessIncorrect ?
        "Sorry, Try Again" : "";
    const audioView = this.props.playAudio ?
        <PlayHint
          audioPath={this.props.audioPath}
          audioFile={this.props.audioFile}
          onSongDone={this.props.onSongDone}
        /> :
        <View/>;
    return (
      <View style={styles.container}>
        <View style={styles.flashMessage}>
          <Text style={styles.flashMessageText}>{message}</Text>
        </View>
        <GuessInput
          style={styles.guessInput}
          onChangeGuess={this.props.onChangeGuess}
          onGuess={this.props.onGuess}
          guess={this.props.guess}
          />
        {audioView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  flashMessage: {
    flex: 0.4,
    justifyContent: 'center'
  },
  flashMessageText: {
    color: "red",
    fontSize: 30,
  },
  guessInput: {
    flex: 0.6,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});