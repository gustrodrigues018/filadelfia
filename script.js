const hinos = [
  {
    titulo: "Alvo Mais Que a Neve",
    video: "https://www.youtube.com/embed/U_g8Znqvqok",
    letra: `Oh! Quão cego andei e perdido vaguei
Longe, longe do meu Salvador...
Mas do céu Ele desceu e Seu sangue verteu
Pra salvar um tão pobre pecador...`
  },
  {
    titulo: "Rude Cruz",
    video: "https://www.youtube.com/embed/VDvBNdqYVYo",
    letra: `Rude cruz se erigiu, dela o dia fugiu
Como emblema de vergonha e dor...
Mas contemplo essa cruz, porque nela Jesus
Deu a vida por mim, pecador.`
  }
];

const container = document.getElementById('hinos-container');
const busca = document.getElementById('busca');

function exibirHinos(filtro = "") {
  container.innerHTML = "";
  hinos
    .filter(hino => hino.titulo.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(hino => {
      const div = document.createElement('div');
      div.className = 'hino';
      div.innerHTML = `
        <h2>${hino.titulo}</h2>
        <iframe width="100%" height="250" src="${hino.video}" frameborder="0" allowfullscreen></iframe>
        <pre>${hino.letra}</pre>
      `;
      container.appendChild(div);
    });
}

busca.addEventListener('input', () => {
  exibirHinos(busca.value);
});

exibirHinos();
