let songs = [
  {
    id: 1,
    title: "Small Worlds",
    artist: "Mac Miller",
    genre: "Hip-Hop",
    duration: 5.47,
    year: 2023,
    isHit: true,
  },
  {
    id: 2,
    title: "Soul Kitchen",
    artist: "The Doors",
    genre: "Rock",
    duration: 3.3,
    year: 1967,
    isHit: false,
  },
  {
    id: 3,
    title: "Clash City Rockers",
    artist: "The Clash",
    genre: "Rock",
    duration: 2.24,
    year: 1979,
    isHit: false,
  },
  {
    id: 4,
    title: "Conception",
    artist: "Miles Davis",
    genre: "Jazz",
    duration: 3.03,
    year: 1951,
    isHit: true,
  },
  {
    id: 5,
    title: "Is This It",
    artist: "The Strokes",
    genre: "Rock",
    duration: 2.3,
    year: 2001,
    isHit: true,
  },
  {
    id: 6,
    title: "Gin And Juice",
    artist: "Snoop Doggy Dogg",
    genre: "Hip Hop",
    duration: 4.04,
    year: 1993,
    isHit: false,
  },
];

const newSong = {
  id: 7,
  title: "Changes",
  artist: "David Bowie",
  genre: "Hip Hop",
  duration: 3.33,
  year: 1971,
  isHit: true,
};

const addSong = (song) => songs.push(song);

addSong(newSong);

const deleteTitle = (title) => songs.filter((song) => song.title !== title);
deleteTitle("Gin And Juice");
