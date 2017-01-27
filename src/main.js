import { renderer, e } from './elements';
import App from './App';
import { subscribe, setState } from './state';
import { navigate } from './mutators';
const root = document.createElement('div');

function render() {
  renderer(e(App), root, root.lastChild);
}

subscribe(render);

document.body.appendChild(root);

render();

setState(
  navigate(window.location.hash ? window.location.hash.replace('#', '') : '/')
);

