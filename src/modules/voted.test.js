import {Voted} from './voted'

let playlist = [];

beforeEach(() => {
    playlist.push({
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
    )
});

afterEach(() => {
    playlist.shift();
});

test('Number of Votes', () => {
    let newPlaylist = Voted(playlist, 1);

    expect(newPlaylist[0].votes.count).toBe(1);
});

test('Do user vote', () => {
    let playlist = [{
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
    }];

    let newPlaylist = Voted(playlist, 1);

    expect(newPlaylist[0].votes.userVoted).toBeTruthy();
});
