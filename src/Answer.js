import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Answer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.artist}</Text>
        <Text>{this.props.album}</Text>
        <Text>{this.props.trackName}</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});