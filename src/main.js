import { renderer, e } from './elements';
import App from './App';
import { subscribe, setState, getState } from './state';
import { navigate } from './mutators';

const root = document.createElement('div');

function render() {
  renderer(e(App), root, root.lastChild);
}

subscribe(render);

function initialPath() {
  if (require('./config').hashHistory) {
    return global.location.hash ? global.location.hash.replace('#', '') : '/';
  } else {
    return global.location.pathname;
  }
}

setState(navigate(initialPath()));

global.addEventListener('scroll', () => {
  if (global.scrollY > 56 && !getState('scrolled')) {
    setState({ scrolled: true });
  }
  if (global.scrollY < 56 && getState('scrolled')) {
    setState({ scrolled: false });
  }
});

global.addEventListener('popstate', function() {
  setState(navigate(initialPath()));
});

document.body.appendChild(root);
