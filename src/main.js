import { renderer, e } from './elements';
import App from './App';
import { subscribe, setState } from './state';
import { navigate } from './mutators';

const root = document.createElement('div');

subscribe(function render() {
  renderer(e(App), root, root.lastChild);
});

setState(
  navigate(global.location.hash ? global.location.hash.replace('#', '') : '/')
);

document.body.appendChild(root);

