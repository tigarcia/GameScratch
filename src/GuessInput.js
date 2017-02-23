import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native'

export default class GuessInput extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={this.props.onChangeGuess}
          value={this.props.guess}
          style={styles.guess}/>
        <Button
          style={{backgroundColor: "blue"}}
          onPress={this.props.onGuess}
          title="Guess"
          color="#841584"
          accessibilityLabel="Guess the song title or artist"/>
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
  },
  guess: {
    backgroundColor: '#ededed',
    justifyContent: 'center',
    height: 50,
    width: 250,
  }
});

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 30 
  },
  formContainer: {
    height: 12,
    flexDirection:'column'
  },
  inputRow: {
    height: 40,
    flexDirection: 'row'
  },
  inputLabel: {
    flex: 0.3,
  },
  input: {
    flex: 0.7,
    height: 30,
    backgroundColor: 'lightgrey',
  }
});*/