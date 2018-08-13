import React from 'react';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';

export default class App extends React.Component {
    render() {
      return (
        <div>
            <TitleBar title={this.props.title} subTitle="created by Joel Borchardt"/>
            <div className="wrapper"> 
            <PlayerList players={this.props.players}/>
            <AddPlayer/>
            </div>
        </div>
      );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
  };