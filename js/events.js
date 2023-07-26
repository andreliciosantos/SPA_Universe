export function changePage(route) {
  
  const links = document.querySelector('.buttons')
    
  links.addEventListener('click', () => {

      if(route === '/pages/home.html'){
        document.body.style.background = "url('../assets/mountains-universe-1.png')"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundRepeat = "no-repeat"

        document.querySelector('a:nth-child(1)').classList.add('selected')
        document.querySelector('a:nth-child(2)').classList.remove('selected')
        document.querySelector('a:nth-child(3)').classList.remove('selected')
      }
      
      if(route === '/pages/universe.html'){
        document.body.style.background = "url('../assets/mountains-universe02.png')"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundRepeat = "no-repeat"

        document.querySelector('a:nth-child(1)').classList.remove('selected')
        document.querySelector('a:nth-child(2)').classList.add('selected')
        document.querySelector('a:nth-child(3)').classList.remove('selected')
      }
      
      if(route === '/pages/exploration.html'){
        document.body.style.background = "url('../assets/mountains-universe-3.png')"
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundRepeat = "no-repeat"

        document.querySelector('a:nth-child(1)').classList.remove('selected')
        document.querySelector('a:nth-child(2)').classList.remove('selected')
        document.querySelector('a:nth-child(3)').classList.add('selected')
      }

  })
}