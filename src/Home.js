import { div, p, h2, ul, li, n, h1, a } from './elements';

export default function Home(peops) {
  return div(
    { className: 'page' },
    div(
      { className: 'page-header' },
      h1(n, 'Welcome to the example page of Minimalist!')
    ),
    div(
      { className: 'page-content' },
      p(
        n,
        `This is a POC for a minimal reimplementation of popular react ecosystem libaries. (without JSX!)`
      ),
      p(n, `The list of reimplemented libaries:`),
      ul(
        n,
        li(
          n,
          `redux - without the reducers see ./state.js, ./mutator.js and ./lib.js`
        ),
        li(
          n,
          `react-router - just use window.history / hash and sync that to state`
        ),
        li(
          n,
          `styled-components - without html helper (.eg styled.div) - see ./styled.js`
        ),
        li(n, `preact instead of react`)
      ),
      p(
        n,
        `The one thing you really need to see in this app is ./lib.js, that's where we create the apis for state management and element creation. Everything else is built on top of that. Also, I'm using preact rather than react because I only use stateless functional components and wanted the footprint to be small. No context, no this.state. Everything comes from a single state tree.`
      ),
      h2(n, `Why?`),
      p(
        n,
        "Just for fun! Also, I'm getting tired to see the list of dependencies of my project. The dependencies used in this project are non critical: typography.js, typography-theme-bootstrap, preact, and material-design-icons Use it if you want to, and discuss with me if you find bugs."
      ),
      /*       p(n, `The current state of my code is getting complex. More libraries, more codes that we don't control. Concepts are bigger than implementation. So I just take the concepts of these libaries and reimplemented using my own code.`),
       p(n, `This project is an approach to simplify any of that. For example, creating a separate reducer and action creators is painful in a complex redux webapp, In this project, it all happens in a mutator.`),
       p(n, `JSX will require you to use module bundlers. We try to keep transpilation minimal, so we can just include a script and start building. Also, it's easier to just write JS rather than XML.`),
       p(n, `The things that we really need in this project is Object spread operator, which can be replaced with Object.assign or $.extend or _.assign. For styling, I haven't found better way than the tagged template approach with styled-components. So there's that.`),*/
      p(
        { style: { textAlign: 'center', padding: '0 1em' } },
        a({ href: 'https://github.com/viankakrisna/minimalist' }, 'Fork here')
      ),
      p(
        { style: { textAlign: 'center', padding: '0 1em' } },
        `Created by `,
        a(
          { href: 'https://github.com/viankakrisna', target: '__blank' },
          'Ade Viankakrisna Fadlil'
        )
      )
    )
  );
}

