export function agruparmentoMusicas(songs) {
  const musicas = {};

  songs.forEach((item) => {
    const id = item.id;
    const titulo = item.titulo;
    const artista = item.artista;

    if (!musicas[id]) {
      musicas[id] = {
        id: 0,
        titulo: "",
        artista: "",
      };
    } else {
      musicas[titulo][artista]++;
    }
  });
}
