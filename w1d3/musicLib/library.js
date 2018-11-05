var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            T03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    for(var id in this.playlists){
      var playlist = this.playlists[id];
      console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")
    }
  },

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    for(var track in this.tracks){
      var tracklist = this.tracks[track];
      console.log(tracklist.id + ": " + tracklist.name + " by " + tracklist.artist + " (" + tracklist.album + ")")
    }
  },


  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var trackId = [];
    var lib = this
    var playlistFinder = function(playlistId){
      var listInfo = "";
      var playlist = lib.playlists[playlistId];
      listInfo += playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks\n";
      trackId = playlist.tracks;
      return listInfo;
    }
    var trackPrinter = function (trackId){
      var trackInfo = "";
      for(id of trackId){
        var track = lib.tracks[id];
        trackInfo += track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")\n";
      }
      return trackInfo;
    }
    console.log(playlistFinder(playlistId) + trackPrinter(trackId));

  },



  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    if (!playlistId) return "No playlist supplied" 
    var libraryTracks = Object.keys(this.tracks);
    var playlistTracks = this.playlists[playlistId].tracks;
    if (libraryTracks.includes(trackId)) {
      playlistTracks.push(trackId);
      console.log("Added!");
    } else {
      console.log("Track not found.");
    }
  },

  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  // adds a track to the library

  addTrack: function (name, artist, album) {
    var newId = this.uid();
    var newTrack = {
      id: newId,
      name: name,
      artist: artist,
      album: album
    }
    
    this.tracks[newId] = newTrack;
    console.log("Added!");
  },


  // adds a playlist to the this

  addPlaylist: function (name) {
    var newId = this.uid();
    var newPlaylist = {
      id: newId,
      name: name,
      tracks: []
    };
    this.playlists[newId] = newPlaylist;
    console.log("Added!")
  },

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {
    var lowerQuery = query.toLowerCase();
    var results = [];
    var lookup = this.tracks;
    for(var track in lookup){
      for(key in lookup[track]){
        var caseInsensitiveKey = JSON.parse(JSON.stringify(this.tracks[track][key]).toLowerCase())
        if(caseInsensitiveKey.indexOf(lowerQuery) != -1){
          results.push(this.tracks[track]);
        }
      }
    }
    console.log(results);
  }
}

library.printPlaylists()
console.log('---')
library.printTracks()
console.log('---')
library.printPlaylist("p01")
console.log('---')
library.addTrackToPlaylist("t01","p01")
console.log('---')
library.addTrack("a","b","c")
console.log('---')
library.addPlaylist("p04")
console.log('---')
library.printSearchResults("three")
