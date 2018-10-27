import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import Track from './track'; 

const API_TRACKS = [
  {
    "id": 1,
    "name": "Bohemian Rhapsody",
    "duration": 211,
    "priority": false,
    "artist": "TQueen",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51an%2Buz6PAL.jpg"
    },
    "pictureUrl": "https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372",
    "votes": {
      "count": 0,
      "userVoted": false
    }
  },
  {
    "id": 2,
    "name": "Stairway To Heaven",
    "duration": 229,
    "priority": false,
    "artist": "LED ZEPPELIN",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://www.guitarpart.fr/wp-content/uploads/2016/06/Led_Zeppelin_Stairway_To_Heaven.jpg"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 0,
      "userVoted": false
    }
  },
  {
    "id": 5,
    "name": "Hotel California",
    "duration": 229,
    "priority": true,
    "artist": "The Eagles",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/91eh6ApLnzL._SX522_.jpg"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 0,
      "userVoted": false
    }
  },
  {
    "id": 12,
    "name": "Let it be",
    "duration": 229,
    "priority": false,
    "artist": "The Beattles",
    "adder": {
      "id": 1,
      "name": "kant",
      "pictureUrl": "https://images-eu.ssl-images-amazon.com/images/I/51h-tuE1PzL._SS500.jpg"
    },
    "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
    "votes": {
      "count": 1,
      "userVoted": false
    }
  },
  {
    "id": 22,
    "name": "Nothing Else Matters",
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
    
    let sortedPlaylist = this.state.tracks.map(track => { 
      return <Track track={track} handleClickVoted={this.handleClickVoted} key={track.id}/>
    })
    
    return (
      <div className="App">
        <header className="App-header">
          
          <h2>Liste de pistes</h2>
          {sortedPlaylist}
          
        </header>
      </div>
    );
  }
}

export default App;
