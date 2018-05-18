# Front-End Challenge

The purpose of this challenge is to assess your ability to create a
front-end application that is interactive, stateful and can
communicate with an API.

What you will be building is a basic music player and autocomplete box.
The design mockup and icon assets are located in `lib/assets`.
Please create the project using React and Redux. We are particularly
looking for clean, well commented and production quality code.

![Design Mockup](/lib/assets/basic_music_player.png)

## Requirements

You require the following to run the project:

```sh
node 6.11 (lts/boron) or above
yarn / npm
```

The finished project should meet the following requirements:

1) As a user, I want to search by song name and see autocomplete results.

- The autocomplete should be configurable to show:
  - List of Song Titles
  - List of Song Titles, and Play/Pause button to preview a song. (Default)

1) As a user, I want to see an album cover of the selected song.

- When clicking a Song Title in search results, the album cover of selected song
  should be displayed.

1) As a user, I want to Play and Pause songs via album cover.

- When hovering over Album Cover, the respective Play or Pause button should
  be displayed.

1) As a user, I want an already playing song whether from Album Cover or Search
Results to Pause, when another song is selected to be played.

Bonus:

- Implement test coverage

## Getting Started

We've included an API Key to Napster. You can search songs, album covers, and
play songs. Napster's API only supports song playback of 30 seconds per song,
unless you use their supported JS SDK: `https://github.com/Napster/napster.js`.

You can work directly with the API or SDK, either option is perfectly fine for
this challenge.

### Running Locally

```sh
npm install
npm run build
npm start
```

#### Napster API KEY

`YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4`

```js
/**
 * GET Album Image
 * http://direct.napster.com/imageserver/v2/albums/{album_id}/images/{size}.{extension}
 *
 * Example:
 * http://direct.napster.com/imageserver/v2/albums/alb.7579441/images/633x422.jpg
 */
```

```js
/**
 * GET Search Tracks
 * http://api.napster.com/v2.2/search?query={trackTitle}&type=track
 *
 * Example:
 * http://api.napster.com/v2.2/search?query=heard&type=track&apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4
 *
 * Sample Response:
 * {
 *   "meta": {
 *     "totalCount": 764516,
 *     "returnedCount": 20
 *   },
 *   "search": {
 *     "query": "heard",
 *     "data": {
 *       "tracks": [{
 *         "type": "track",
 *         "id": "tra.7579516",
 *         "name": "Heard 'Em Say",
 *         "artistId": "art.5015309",
 *         "artistName": "Kanye West",
 *         "albumName": "Late Registration",
 *         "albumId": "alb.7579441",
 *         "links": {
 *           "artists": {
 *             "ids": ["art.5015309"],
 *             "href": "https://api.napster.com/v2.2/artists/art.5015309"
 *           },
 *           "albums": {
 *             "ids": ["alb.7579441"],
 *             "href": "https://api.napster.com/v2.2/albums/alb.7579441"
 *           },
 *         },
 *         "previewURL": "http://listen.vo.llnwd.net/g1/2/8/8/6/7/1042476882.mp3"
 *       }]
 *     },
 *   }
 * }
 */
```

There are two folders `src` and `lib` which you can use to build your
project in. Feel free to create whatever directory structure you
require, but keep in mind what community standards are out there for
your chosen implementation method.

### Submission

When you are done, tar up your work and send it to
[pnasser@280cap.com](mailto:pnasser@280cap.com).
