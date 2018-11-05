
// {
//   tracks: { 
//     t01: { id: "t01",
//             name: "Code Monkey",
//             artist: "Jonathan Coulton",
//             album: "Thing a Week Three" },
//     t02: { id: "t02",
//             name: "Model View Controller",
//             artist: "James Dempsey",
//             album: "WWDC 2003"},
//     T03: { id: "t03",
//             name: "Four Thirty-Three",
//             artist: "John Cage",
//             album: "Woodstock 1952"}
//   },
//   playlists: { 
//     p01: { id: "p01",
//           name: "Coding Music",
//           tracks: ["t01", "t02"]
//         },
//     p02: { id: "p02",
//           name: "Other Playlist",
//           tracks: ["t03"]
//         }
//   }
// }


function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = {};
  return this;
}

/* A Track has a title, a rating (an integer from 1 to 5)
 and a length (integer in seconds) all of which are required when creating a new track */

Library.prototype.addPlaylist = function(playlistName, ...tracks) {
  /* A Playlist also has many tracks
A Track has a title, a rating (an integer from 1 to 5) 
and a length (integer in seconds) all of which are required when creating a new track
*/
  this.playlists[playlistName] = {}
  tracks.forEach(track => {
    console.log(this.playlists[playlistName])
    this.playlists[playlistName][track.title] = track;
  })
  return this.playlists[playlistName]
}

Library.prototype.addTrackToPlaylist = function(playlistName, ...tracks) {
  this.playlists[playlistName][track.title] = track
}

Library.prototype.overallRating = function(playlistName) {
  // Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
  return Object.values(this.playlists[playlistName])
    .reduce((playlistRating, track) => playlistRating += track.rating, 0)
}

Library.prototype.totalDuration = function(playlistName) {
  // Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
  return Object.values(this.playlists[playlistName])
    .reduce((playlistLength, track) => playlistLength += track.length, 0)
}


const library = new Library('myList', 'spencer')

library.addPlaylist('p01',
  { id: "t01",
    title: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" ,
    length: 5,
    rating: 4},
  { id: "t02",
    title: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003",
    length: 5,
    rating: 4},
  { id: "t03",
    title: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952",
    length: 5,
    rating: 4}
);

console.log(library.overallRating('p01'))
console.log(library.totalDuration('p01'))


