import { div, p, h2, ul, li, n, h1, a } from "../lib/elements";

export default function Home(peops) {
  return div(
    { className: "page" },
    div(
      { className: "page-header" },
      h1(n, "Welcome to the example page of Minimalist!"),
      p(
        n,
        `This is a POC for a minimal reimplementation of popular react ecosystem libaries. (without JSX!)`
      )
    ),
    div(
      { className: "page-content" },
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
        "Just for fun! Also, I'm getting tired to see the list of dependencies of my project. The dependencies used in this project are also minimal: preact, webpack and babel. Use it if you want to, and discuss with me if you find bugs."
      ),
      p(
        { style: { textAlign: "center", padding: "0 1em" } },
        a({ href: "https://github.com/viankakrisna/minimalist" }, "Fork here")
      ),
      p(
        { style: { textAlign: "center", padding: "0 1em" } },
        `Created by `,
        a(
          { href: "https://github.com/viankakrisna", target: "__blank" },
          "Ade Viankakrisna Fadlil"
        )
      )
    )
  );
}
