import React, { Component } from 'react'
import GameWelcome from './GameWelcome'
import SongGame from './SongGame'
import {Text} from 'react-native'


export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startGame: false
    };
    this.onStartPlaying = this.onStartPlaying.bind(this);
  }

  onStartPlaying(e) {
    this.setState({startGame: true});
  }

  render() {
   return this.state.startGame ?
              <SongGame/> :
              <GameWelcome onStartPlaying={this.onStartPlaying}/>;
  } 
}