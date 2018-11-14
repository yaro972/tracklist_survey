import { sortTracks } from './sortTracks'

test('Sort playlist', () => {

  let initialPlaylist = [
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "duration": 211,
      "priority": false,
      "artist": "Queen",
      "adder": {
        "id": 1,
        "name": "kant",
        "pictureUrl": "https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372"
      },
      "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51an%2Buz6PAL.jpg",
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
        "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80"
      },
      "pictureUrl": "https://www.guitarpart.fr/wp-content/uploads/2016/06/Led_Zeppelin_Stairway_To_Heaven.jpg",
      "votes": {
        "count": 1,
        "userVoted": false
      }
    }
  ];
  let sortedPlaylist = [
    {
      "id": 2,
      "name": "Stairway To Heaven",
      "duration": 229,
      "priority": false,
      "artist": "LED ZEPPELIN",
      "adder": {
        "id": 1,
        "name": "kant",
        "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80"
      },
      "pictureUrl": "https://www.guitarpart.fr/wp-content/uploads/2016/06/Led_Zeppelin_Stairway_To_Heaven.jpg",
      "votes": {
        "count": 1,
        "userVoted": false
      }
    },
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "duration": 211,
      "priority": false,
      "artist": "Queen",
      "adder": {
        "id": 1,
        "name": "kant",
        "pictureUrl": "https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372"
      },
      "pictureUrl": "https://images-na.ssl-images-amazon.com/images/I/51an%2Buz6PAL.jpg",
      "votes": {
        "count": 0,
        "userVoted": false
      }
    }
  ];

  expect(sortTracks(initialPlaylist)).toEqual(sortedPlaylist);
});

