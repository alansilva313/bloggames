


const posts = [
    {
        id: 1,
        title: 'Xbox: consoles ganham atualização com novos recursos',
        img: './img/img1.png',
        date: 19,
        year: 2022,
        mes: 'outubro'

    },

    {
        id: 2,
        title: 'Cyberpunk vai ganhar novo jogo',
        img: './img/img.png',
        date: 4,
        year: 2022,
        mes: 'outubro'

    },

    {
        id: 3,
        title: 'Coringa pode aparecer em MultiVersus em breve',
        img: './img/img2.png',
        date: 27,
        year: 2022,
        mes: 'setembro'

    },

    {
        id: 4,
        title: 'EA Games confirma novo jogo e janela de lançamento',
        img: './img/img3.png',
        date: 30,
        year: 2022,
        mes: 'agosto'

    }
]



const posts2 = document.getElementById('posts')

posts.forEach(itensPosts => {

    posts2.innerHTML += `

 
  <div class="cardPost">
  <img src="${itensPosts.img}" alt="">
  <div class="textCard">
  <p>${itensPosts.date} de ${itensPosts.mes}, ${itensPosts.year}</p>
  <h3>${itensPosts.title}</h3>

  </div>


  </div>

 



    
    `
    
});