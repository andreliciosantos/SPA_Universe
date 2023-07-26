import { changePage} from "./events.js"

export class Router {
  routes = {}
  routee
  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, "", event.target.href)

    this.handle()

    console.log(event.target.href)
    changePage(this.routee)
  }

  handle() {
    const { pathname } = window.location
    this.routee = this.routes[pathname] || this.routes[404]

    fetch(this.routee).then(data => data.text()).then( html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}