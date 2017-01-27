import {renderer, e} from './elements'
import App from './App'
import {subscribe} from './state'

const root = document.createElement('div')

function render(){
  renderer(e(App),
    root,
    root.lastChild
  )
}

subscribe(render)

document.body.appendChild(root)

render()

localStorage.setItem('state', JSON.stringify({}))