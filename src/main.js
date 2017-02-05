import App from './components/App';
import { renderer, e } from './lib/elements';
import { subscribe, setState, getState } from './lib/state';
import { navigate } from './lib/mutators';

export default function main() {
  const root = document.createElement('div');

  subscribe(render);
  setState(navigate(initialPath()));

  global.addEventListener('scroll', () => {
    if (global.scrollY > 56 && !getState('scrolled')) {
      return setState({ scrolled: true });
    }
    if (global.scrollY < 56 && getState('scrolled')) {
      return setState({ scrolled: false });
    }
  });

  global.addEventListener('popstate', function() {
    setState(navigate(initialPath()));
  });

  global.addEventListener('hashchange', function() {
    global.scrollBy(0, 0);
  });

  document.body.appendChild(root);

  function render() {
    renderer(e(App), root, root.lastChild);
  }

  function initialPath() {
    if (require('./lib/config').hashHistory) {
      return global.location.hash ? global.location.hash.replace('#', '') : '/';
    } else {
      return global.location.pathname;
    }
  }
}

if (global.window) {
  main();
}
