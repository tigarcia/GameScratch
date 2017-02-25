import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch
} from 'react-native'
import CustomButton from './CustomButton'

export default class Answer extends Component {
  render() {
    const result = this.props.guessIncorrect === null ||
                   this.props.guessIncorrect === true ?
      <Text style={styles.incorrectText}>Incorrect 👎</Text> :
      <Text style={styles.correctText}>Correct 👍</Text>;

    return (
      <View style={styles.container}>
        <View style={{marginBottom: 15}}>
          <Text style={{fontSize: 25}}>{result}</Text>
        </View>
        <View style={styles.artistView}>
          <Text style={styles.artistText}>{this.props.artist}</Text>
          <Text style={styles.artistText}>{this.props.trackName}</Text>
          <Text style={{fontSize:21}}>{this.props.album}</Text>
        </View>
        <Image
          style={styles.img}
          source={{uri: 'https://www.publicdomainpictures.net/pictures/130000/velka/musical-notes.jpg'}}
        />
        <CustomButton
          title={"CONTINUE"}
          onPress={this.props.onPressNext} />
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
  artistText: {
    fontSize: 25
  },
  artistView: {
    marginBottom: 25,
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 250,
    marginBottom: 25,
  },
  correctText: {
    fontSize: 25,
    color: 'green',
    marginBottom: 10
  },
  incorrectText: {
    fontSize: 25,
    color: 'red',
    marginBottom: 10
  },
  nextButton: {
    borderRadius: 4,
    backgroundColor: "blue",
    padding:10
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});