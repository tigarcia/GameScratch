import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native'

export default class Answer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.artist}</Text>
        <Text>{this.props.album}</Text>
        <Text>{this.props.trackName}</Text>
        <Image
          style={{width: 200, height: 80}}
          source={{uri: 'https://www.publicdomainpictures.net/pictures/130000/velka/musical-notes.jpg'}}
        />
        <Button
          style={{backgroundColor: "blue"}}
          title="Next Song"
          onPress={this.props.onPressNext}/>
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