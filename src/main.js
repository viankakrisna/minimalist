import { renderer, e } from './elements';
import App from './App';
import { subscribe, setState, getState } from './state';
import { navigate } from './mutators';

const root = document.createElement('div');

subscribe(function render() {
  renderer(e(App), root, root.lastChild);
});

setState(
  navigate(global.location.hash ? global.location.hash.replace('#', '') : '/')
);
global.addEventListener('scroll', () => {
  if (global.scrollY > 56 && !getState('scrolled')) {
    setState({ scrolled: true });
  }
  if (global.scrollY < 56 && getState('scrolled')) {
    setState({ scrolled: false });
  }
});
document.body.appendChild(root);

