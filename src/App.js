import {e,n,p,h1,ul,li,a,div,h2} from './elements'
import styled from './styled'
import Counter from './Counter'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import {getState, setState} from './state'
import {colors} from './theme'
import Typography from 'typography'
import typographyTheme from 'typography-theme-bootstrap'
const typography = new Typography(typographyTheme)
const Match = props => 
  getState().location.pathname === props.pathname
    ? props.children[0]
    : null

const App = styled(function App(props){
  return div({className: props.className},
     e(Header),
     e(Match, {pathname: '/'}, div({className: 'page'},
       div({className: 'page-header'}, 
         h1(n, 'Welcome to the Minimalist!')
       ),
       div({className: 'page-content'},
       p(n, `This is a POC for a minimal reimplementation of popular react ecosystem libaries. (without JSX!)`),
       p(n, `The list of reimplemented libaries:`),
       ul(n, 
         li(n, `redux - without the reducers see ./state.js, ./mutator.js and ./lib.js`),
         li(n, `react-router - just use window.history / hash and sync that to state`),
         li(n, `styled-components - without html helper (.eg styled.div) - see ./styled.js`),
         li(n, `react-hyperscripts - just a factory - see ./elements.js`),
         li(n, `preact instead of react`)
       ),
       p(n,
         `The one thing you really need to see in this app is ./lib.js, that's where we create the apis for state management and element creation. Everything else is built on top of that. Also, I'm using preact rather than react because I only use stateless functional components and wanted the footprint to be small. No context, no this.state. Everything comes from a single state tree.`
       ),
       h2(n,
         `Why?`
       ),
       p(n, 'Just for fun! Also, I\'m getting tired to see the list of dependencies of my project. The dependencies used in this project are non critical: typography.js, typography-theme-bootstrap, preact, and material-design-icons Use it if you want to, and discuss with me if you find bugs.'),
/*       p(n, `The current state of my code is getting complex. More libraries, more codes that we don't control. Concepts are bigger than implementation. So I just take the concepts of these libaries and reimplemented using my own code.`),
       p(n, `This project is an approach to simplify any of that. For example, creating a separate reducer and action creators is painful in a complex redux webapp, In this project, it all happens in a mutator.`),
       p(n, `JSX will require you to use module bundlers. We try to keep transpilation minimal, so we can just include a script and start building. Also, it's easier to just write JS rather than XML.`),
       p(n, `The things that we really need in this project is Object spread operator, which can be replaced with Object.assign or $.extend or _.assign. For styling, I haven't found better way than the tagged template approach with styled-components. So there's that.`),*/
       p({style: {textAlign: 'center', padding: '0 1em'}}, `Created by `, a({href: 'https://github.com/viankakrisna', target: '__blank'}, 'Ade Viankakrisna Fadlil'))
     ))),
     e(Match, {pathname:'/counter'},
       div({className: 'page'},
       div({className: 'page-header'}, 
         h1(n, 'Counter Example')
       ),
       div({className: 'page-content'},
        e(Counter)
       ))
     ),
     e(Match, {pathname:'/login'},
        e(Login)
     ),
     e(Match, {pathname:'/register'},
        e(Register)
     ),
     e(Match, {pathname:'/*'},
        e(Register)
     )             
  )
})`
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

${() => typography.toString()}

&{
  padding-top: 3.5em;
  overflow: auto;
  background: #f1f1f1;
  min-height: 100vh;
}

& .page-header {
  background: ${()=> colors.blue.shade_800};
  overflow: hidden;
  margin-bottom: -3.5em;
  color: white;
  text-align: center;
  padding: 5em 0 7.5em;
}
& .page-content {
  width: 640px;
  max-width: 100%;
  background: white;
  border-radius: 2px;
  padding: 1em;
  margin: 1em auto;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
@media (max-width: 767px){
  & .page-content {
     margin: 1em;
     max-width: calc(100% - 2em);
  }
}
`

export default App