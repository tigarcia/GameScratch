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
    let guessResult = this.props.guessIncorrect ?
        <Text>Sorry, try again</Text> :
        <View/>
    let audioView = this.props.playAudio ?         
        <PlayHint
          audioPath={this.props.audioPath}
          audioFile={this.props.audioFile}
          onSongDone={this.props.onSongDone}
        /> :
        <View/>;
    return (
      <View style={styles.container}>
        <View>
          {guessResult}
        </View>
        <GuessInput
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});