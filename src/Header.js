import { e, i, div } from './elements';
import { menuOpen } from './mutators';
import styled from './styled';
import { colors } from './theme';
import { getState, setState } from './state';
import Link from './Link';
function Header(props) {
  return div(
    { className: props.className },
    i(
      {
        className: 'material-icons menu-toggle',
        onClick: () => setState(menuOpen(!getState().menuOpen))
      },
      'menu'
    ),
    e(Link, { className: 'logo', to: '/' }, 'Minimalist'),
    div({ className: 'overlay', onClick: () => setState(menuOpen(false)) }),
    div(
      { className: 'menu' },
      e(Link, { to: '/' }, 'Home'),
      // e(Link, { to: '/register' }, 'Register')
      e(Link, { to: '/counter' }, 'Counter'),
      e(Link, { to: '/todo' }, 'Todo')
    )
  );
}
const headerHeight = () => '3.5em';
export default styled(Header)`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: 250ms;
    background: ${colors.blue.shade_800};
    height: ${headerHeight};
    line-height: 1.5em;
    z-index: 10;
    ${() =>
  getState('scrolled')
    ? 'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
    : ''}
    }
  & .logo {
    float: left;
    padding: 1rem;
    color: white;
    font-size: 1.5em;
    text-decoration: none;
  }
  & .logo:hover {
    text-decoration: none;
  }
  & .menu a {
    color: white;
    padding: 1em;
    text-decoration: none;
    display: inline-block;
    transition: 250ms;
    box-shadow: inset 0 0 0 0 white;
  }
  & .menu a.active,
  & .menu a:hover{
    // background: rgba(0,0,0,0.25);
    box-shadow: inset 0 -0.25em 0 0 white;
  }
  & .menu-toggle{
    display: none;
  }
  @media (min-width: 768px){
    & {
      text-align: right;
      padding: 0 1em;
    }
  }
  @media (max-width: 767px){
    & .logo {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: ${headerHeight};
      padding: 1em;
      text-align: center;
      margin: auto;
      width: 10em;
      box-sizing: border-box;
      color: white;
      float: none;
      font-size: 1em;
    }
    & .menu-toggle {
      color: white;
      display: inline-block;
      line-height: inherit;
      padding: 1em;
      cursor: pointer;
      font-size: 1em;
      box-sizing: border-box;
    }
    & .menu {
      position: fixed;
      top: ${headerHeight};
      left: 0;
      bottom: 0; 
      transition: 250ms;
      width: 220px;
      background: white;
      border-right: 1px solid lightgrey;
      transform: translateX(${props => getState().menuOpen ? '0' : '-100%'});
    }
    & .menu a {
      display: block;
      color: black;
    }
    & .overlay {
      background: rgba(0,0,0,0.5);
      position: fixed;
      transition: 250ms;
      top: ${headerHeight};
      left: 0;
      right: 0;
      bottom: 0;
      opacity: ${props => getState().menuOpen ? '1' : '0'};
      pointer-events: ${props => getState().menuOpen ? 'visible' : 'none'}
    }
  }
`;

