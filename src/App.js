import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

const TRACKS = [
  {
    "id": 1,
    "name": "Beast Of Burden",
    "duration": 211,
    "priority": false,
    "artist": "The Rolling Stones",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd"
    },
    "pictureUrl": "https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372",
    "votes": {
      "count": 0,
      "userVoted": false
    }
  },
  {
    "id": 2,
    "name": "Purple Haze",
    "duration": 229,
    "priority": false,
    "artist": "Jimi Hendrix",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 0,
      "userVoted": false
    }
  },
  {
    "id": 5,
    "name": "Nobody my body",
    "duration": 229,
    "priority": true,
    "artist": "Jimi Hendrix",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 0,
      "userVoted": false
    }
  },
  {
    "id": 12,
    "name": "Bleeding me",
    "duration": 229,
    "priority": false,
    "artist": "Metallica",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 1,
      "userVoted": false
    }
  },
  {
    "id": 22,
    "name": "Rock your body",
    "duration": 229,
    "priority": false,
    "artist": "Justin Timberlake",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 1,
      "userVoted": false
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tracks: []
    }
    
    this.handleClickVoted = this.handleClickVoted.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      tracks: TRACKS
    })
  }
  
  increaseVote(id){
    return this.state.tracks.map(track => {
      if (track.id === id) {
        track.votes.count ++;
        track.votes.userVoted = true;
      }
      
      return track;
    }
      )
  }
  
  handleClickVoted (ev, data){
    this.setState({
      tracks: this.sortTracks( this.increaseVote(data))
    });
  }
  
  sortTracks(trackList){
    console.log(trackList);
    // return trackList;
    return trackList.sort((currentTrack, nextTrack) => {
      return nextTrack.votes.count  - currentTrack.votes.count;
    });
  }
  
  
  showTrack(){
    return this.state.tracks.map(track => {
    return <div key={track.id} onClick={(e) => this.handleClickVoted(e, track.id) }> 
    <p>{track.name}</p>
    <p>{track.duration}</p>
    <p>{track.artist}</p>
    <p>{track.adder.name }</p>
    <img src={track.adder.pictureUrl} alt="Adder picture"/>
    <img src={track.pictureUrl} alt="Track album picture" />
    <p>{track.votes.count}</p>
    </div>
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h2>Liste de pistes</h2>
          {this.showTrack(TRACKS)}
          
        </header>
      </div>
    );
  }
}

export default App;
