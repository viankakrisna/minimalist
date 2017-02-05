import App from './components/App';
import { renderer, e } from './lib/elements';
import { subscribe, setState, getState } from './lib/state';
import { navigate } from './lib/mutators';
import { hashHistory } from './lib/config';

require('offline-plugin/runtime').install();
export default function main() {
  const root = global.document.createElement('div');

  function render() {
    renderer(e(App), root, root.lastChild);
  }

  function initialPath() {
    if (hashHistory) {
      return global.location.hash ? global.location.hash.replace('#', '') : '/';
    }
    return global.location.pathname;
  }

  subscribe(render);
  setState(navigate(initialPath()));

  global.addEventListener('scroll', () => {
    if (global.scrollY > 56 && !getState('scrolled')) {
      return setState({ scrolled: true });
    }
    if (global.scrollY < 56 && getState('scrolled')) {
      return setState({ scrolled: false });
    }
    return false;
  });

  global.addEventListener('popstate', () => {
    setState(navigate(initialPath()));
  });

  global.addEventListener('hashchange', () => {
    global.scrollBy(0, 0);
  });

  global.document.body.appendChild(root);
}

if (global.window) {
  main();
}
