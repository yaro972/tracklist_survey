import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Tracklist from './Tracklist'; 

const API_TRACKS = [
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

// Utiliser axios
// const API_TRACKS = 'http://localhost:3000/tracklist.json';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tracks: []
    }
    
    this.handleClickVoted = this.handleClickVoted.bind(this);
  }
  
  componentDidMount(){
    console.log(API_TRACKS)
    
    this.setState({
      tracks: API_TRACKS
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
    return trackList.sort((currentTrack, nextTrack) => {
      return nextTrack.votes.count  - currentTrack.votes.count;
    });
  }
  
  render() {
    
    let sortedTrack = this.state.tracks.map(track => { 
      return <Tracklist track={track} handleClickVoted={this.handleClickVoted} key={track.id}/>
    })
    
    return (
      <div className="App">
        <header className="App-header">
          
          <h2>Liste de pistes</h2>
          {/* {this.showTrack(TRACKS)} */}
          {/* <Tracklist tracks={TRACKS} handleClickVoted={this.handleClickVoted} /> */}
          
          {sortedTrack}
          
        </header>
      </div>
    );
  }
}

export default App;
