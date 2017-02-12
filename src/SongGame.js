import React, {Component} from 'react'
import SongData from './SongData'
import Answer from './Answer'
import PlayHint from './PlayHint'

export default class SongGame extends Component {
  constructor(props) {
    super(props);
    this.idToFetch = SongData.randomSongId();

    this.state = {
      hintPlaying: true,
      song: {}
    }
  }

  componentDidMount() {
    fetch(`https://itunes.apple.com/us/lookup?id=${this.idToFetch}`)
      .then(d => d.json())
      .then(function(d) {
        let song = {};
        song.artist = d.results[0].artistName;
        song.id = d.results[0].artistId;
        song.img = d.results[0].artworkUrl60;
        song.album = d.results[0].collectionName;
        song.trackName = d.results[0].trackName;
        song.trackUncensoredName = d.results[0].trackUncensoredName;
        song.audioUrl = d.results[0].previewUrl;
        this.setState({song});
      }.bind(this));
  }
  render() {
    const view = this.state.hintPlaying ?
                  <PlayHint audioUrl={this.state.song.audioUrl}/> :
                  <Answer
                    artist={this.state.song.artist}
                    album={this.state.song.album}
                    trackName={this.state.song.trackName} />;

    return view;
  }
}
