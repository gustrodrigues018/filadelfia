const hinos = [
  // ... hinos anteriores ...
  {
    titulo: "Foi na Cruz – Jefferson & Suellen",
    video: "https://www.youtube.com/embed/iS6GXPbhCwU",
    letra: `A cruz era o meu lugar
Os cravos eram em minhas mãos
O castigo estava sobre mim
Eu era culpado, Ele não
...
Foi na cruz que seu sangue derramou por mim
Foi na cruz que se ouviu o brado: Está consumado`  // Fonte: Letras Gospel & Cifra Club :contentReference[oaicite:1]{index=1}
  },
  {
    titulo: "Luz Divina",
    video: "https://www.youtube.com/embed/[embed_id]",
    letra: `Oh, vem, divina luz, as trevas dissipar!
Oh, vem-me alumiar!...`  // Fonte: Portal Casa do Senhor :contentReference[oaicite:2]{index=2}
  },
  {
    titulo: "Maranata | Avivah (Feat. Fernanda Madaloni)",
    video: "https://www.youtube.com/embed/[embed_id]",
    letra: `Tu és a minha luz
A minha salvação...`  // Fonte: Vagalume/Cifra Club :contentReference[oaicite:3]{index=3}
  },
  {
    titulo: "Canção Que Não Envelhece (AO VIVO)",
    video: "https://www.youtube.com/embed/[embed_id]",
    letra: `Sou tão pequeno diante da glória
De um Deus poderoso...`  // Fonte: Vagalume & Letras Gospel :contentReference[oaicite:4]{index=4}
  },
  {
    titulo: "Jeová Jireh – Aline Barros",
    video: "https://www.youtube.com/embed/QZDCWaznWaM",
    letra: `O fogo não me queima
Nas águas não vou afundar...`  // Fonte: Letras Gospel / Vagalume :contentReference[oaicite:5]{index=5}
  },
  {
    titulo: "Caminho no Deserto – Márcio Couth",
    video: "https://www.youtube.com/embed/[embed_id]",
    letra: `Deus de milagres, Deus de promessas
Caminho no deserto, luz na escuridão...`  // Fonte: Cifra Club / Letras Gospel :contentReference[oaicite:6]{index=6}
  },
  {
    titulo: "Começo, Meio e Fim / Mais Perto Quero Estar – Júlia Vitória",
    video: "https://www.youtube.com/embed/[embed_id]",
    letra: `És a fonte, o meu destino
És começo, meio e fim...`  // Fonte: Vagalume / Letras.com.br :contentReference[oaicite:7]{index=7}
  },
  {
    titulo: "Canção do Céu – Anderson Freire",
    video: "https://www.youtube.com/embed/[embed_id]",
    letra: `Existe uma canção em cada um de nós
Foi Deus quem escreveu...`  // Fonte: Vagalume / Letras.com.br / Cifra Club :contentReference[oaicite:8]{index=8}
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
