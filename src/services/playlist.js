const playlist = [
  {
    id: 1,
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    duracao: "3:20",
  },
  {
    id: 2,
    titulo: "As It Was",
    artista: "Harry Styles",
    duracao: "2:47",
  },
  {
    id: 3,
    titulo: "Levitating",
    artista: "Dua Lipa",
    duracao: "3:23",
  },
  {
    id: 4,
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    duracao: "3:53",
  },
  {
    id: 5,
    titulo: "Good 4 u",
    artista: "Olivia Rodrigo",
    duracao: "2:58",
  },
  {
    id: 6,
    titulo: "Watermelon Sugar",
    artista: "Harry Styles",
    duracao: "3:02",
  },
  {
    id: 7,
    titulo: "Stay",
    artista: "The Kid LAROI, Justin Bieber",
    duracao: "2:21",
  },
  {
    id: 8,
    titulo: "Happier Than Ever",
    artista: "Billie Eilish",
    duracao: "4:58",
  },
  {
    id: 9,
    titulo: "Cold Heart (PNAU Remix)",
    artista: "Elton John, Dua Lipa",
    duracao: "3:22",
  },
  {
    id: 10,
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    duracao: "5:55",
  },
];

export const playlistMusicas = () => {
  return new Promise((musicas) => {
    setTimeout(() => {
      musicas(playlist);
    }, 1500);
  });
};
