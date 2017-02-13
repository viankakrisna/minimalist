import Counter from '../components/Counter';
import Header from '../components/Header';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import Tumblr from '../components/Tumblr';
import Todo from '../components/Todo';
import Match from '../components/Match';

import { e, div } from '../lib/elements';
import styled from '../lib/styled';
import theme from '../lib/theme';
import { cardMixin, typographyMixin } from '../lib/mixins';
import { zoomIn } from '../lib/animation';

const App = styled(function App(props) {
  return div(
    { className: props.className },
    e(Header),
    e(Match, { pathname: '/' }, e(Home)),
    e(Match, { pathname: '/counter' }, e(Counter)),
    e(Match, { pathname: '/login' }, e(Login)),
    e(Match, { pathname: '/tumblr' }, e(Tumblr)),
    e(Match, { pathname: '/register' }, e(Register)),
    e(Match, { pathname: '/todo' }, e(Todo))
  );
})`

${typographyMixin()}

body {
  margin: 0;
  padding: 0;
}


& {
  padding-top: 3.5em;
  background: #f1f1f1;
  min-height: 100vh;
  overflow: hidden;
}

& .page-header {
  background: ${theme.pageHeaderBg};
  overflow: hidden;
  margin-bottom: -8.5em;
  color: white;
  text-align: center;
  padding: 4em 1em 8em;
  animation: ${zoomIn} 250ms;
  transform-origin: top center;
}
& .page-content {
  ${cardMixin}
}
@media (max-width: 767px){
  & .page-content {
     margin: 1em;
     max-width: calc(100% - 2em);
  }
}
`;
export default App;
