import React, {Component} from 'react'
import RNFS from 'react-native-fs'
import SongData from './SongData'
import Answer from './Answer'
import GuessView from './GuessView'


const audioFile = 'audio.m4a';
const audioPath = RNFS.DocumentDirectoryPath;
export default class SongGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintScene: true,
      playAudio: false,
      guess: '',
      guessIncorrect: null,
      spinner: null,
      song: {}
    }

    this.onPressNext = this.onPressNext.bind(this);
    this.onSongDone = this.onSongDone.bind(this);
    this.onChangeGuess = this.onChangeGuess.bind(this);
    this.onGuess = this.onGuess.bind(this);
  }

  resetState() {
    this.setState({
      hintScene: true,
      playAudio: false,
      guess: '',
      guessIncorrect: null,
      spinner: null,
      song: {}
    });
  }

  onPressNext(e) {
    this.downloadAndPlaySong();
    this.resetState();
  }

  onSongDone() {
    this.setState({playAudio: false, hintScene: false});
  }

  onChangeGuess(guess) {
    this.setState({guess});
  }

  onGuess() {
    if (this.state.hintScene && this.state.playAudio) {
      if (this.verifyGuess(this.state.guess)) {
        this.setState({guessIncorrect: false, hintScene: false})
      } else {
        this.setState({guessIncorrect: true})
      }
    }

  }

  verifyGuess(guess) {

    const guesses = guess.trim().toLowerCase().split(/\s+/);
    const answers = `${this.state.song.artist} ${this.state.song.trackName}`
                        .trim().toLowerCase();
    return guesses.reduce(function(acc, g) {
      if (answers.indexOf(g) >= 0) {
        return true;
      }
      return acc;
    }, false);
  }

  downloadAndPlaySong() {
    const songId = SongData.randomSongId();
    fetch(`https://itunes.apple.com/us/lookup?id=${songId}`)
      .then(d => d.json())
      .then((d) => {
        let song = {};
        song.artist = d.results[0].artistName;
        song.id = d.results[0].artistId;
        song.artworkUrl = d.results[0].artworkUrl60;
        song.album = d.results[0].collectionName;
        song.trackName = d.results[0].trackName;
        song.audioUrl = d.results[0].previewUrl;
        this.setState({song});
        return song;
      })
      .then((s) => {
        return RNFS.downloadFile({
          fromUrl: s.audioUrl,
          toFile: `${audioPath}/${audioFile}`
        }).promise;
      })
      .then((d) => this.setState({playAudio: true}))
      .catch((err) => {
        console.warn("Download error: ", err);
        this.resetState();
        this.downloadAndPlaySong();
      })
  }

  componentDidMount() {
    this.downloadAndPlaySong();
  }

  render() {
    const view = this.state.hintScene ?
                  <GuessView playAudio={this.state.playAudio}
                            audioPath={audioPath}
                            audioFile={audioFile}
                            onSongDone={this.onSongDone}
                            guess={this.state.guess}
                            guessIncorrect={this.state.guessIncorrect}
                            onChangeGuess={this.onChangeGuess}
                            onGuess={this.onGuess}
                  /> :
                  <Answer
                    guessIncorrect={this.state.guessIncorrect}
                    artist={this.state.song.artist}
                    album={this.state.song.album}
                    artworkUrl={this.state.song.artworkUrl}
                    trackName={this.state.song.trackName}
                    onPressNext={this.onPressNext}
                  />;

    return view;
  }
}
