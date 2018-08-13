import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName1 = e.target.playerName.value;

    e.preventDefault();
    
    if (playerName1) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName1,
        score: 0
      });
    }
  }
    render() {
      return (
        <div className="item">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name" autoComplete="off"/>
          <button className="button">Add Player</button>   
        </form>
        </div>
      )
    }
}