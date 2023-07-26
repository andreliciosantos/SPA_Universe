import { Router } from "./router.js"


const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')

router.handle()

const links = document.querySelector('.buttons')

// links.addEventListener('click', () => {

//   if(router.routee === '/pages/home.html'){
//     document.body.style.background = "url('../assets/mountains-universe-1.png')"
//     document.body.style.backgroundSize = "cover"
//     document.body.style.backgroundRepeat = "no-repeat"

//     document.querySelector('a:nth-child(1)').classList.add('selected')
//     document.querySelector('a:nth-child(2)').classList.remove('selected')
//     document.querySelector('a:nth-child(3)').classList.remove('selected')
//   }
  
//   if(router.routee === '/pages/universe.html'){
//     document.body.style.background = "url('../assets/mountains-universe02.png')"
//     document.body.style.backgroundSize = "cover"
//     document.body.style.backgroundRepeat = "no-repeat"

//     document.querySelector('a:nth-child(1)').classList.remove('selected')
//     document.querySelector('a:nth-child(2)').classList.add('selected')
//     document.querySelector('a:nth-child(3)').classList.remove('selected')
//   }
  
//   if(router.routee === '/pages/exploration.html'){
//     document.body.style.background = "url('../assets/mountains-universe-3.png')"
//     document.body.style.backgroundSize = "cover"
//     document.body.style.backgroundRepeat = "no-repeat"

//     document.querySelector('a:nth-child(1)').classList.remove('selected')
//     document.querySelector('a:nth-child(2)').classList.remove('selected')
//     document.querySelector('a:nth-child(3)').classList.add('selected')
//   }
//   console.log('teste')
// })

window.onpopstate = () => router.handle() // pra funcionar os botoes de avançar e voltar no navegado
window.route = () => router.route()

