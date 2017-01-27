# Minimalist

## Start

`npm install`

`npm start`

Go to `localhost:8080`

This is a POC for a minimal reimplementation of popular react ecosystem libaries. (without JSX!)

The list of reimplemented libaries:

* redux - without the reducers see ./state.js, ./mutator.js and ./lib.js
* react-router - just use window.history / hash and sync that to state
* styled-components - without html helper (.eg styled.div) - see ./styled.js
* react-hyperscripts - just a factory - see ./elements.js
* preact instead of react

The one thing you really need to see in this app is ./lib.js, that's where we create the apis for state management and element creation. Everything else is built on top of that. Also, I'm using preact rather than react because I only use stateless functional components and wanted the footprint to be small. No context, no this.state. Everything comes from a single state tree.

Why?

Just for fun! Also, I'm getting tired to see the list of dependencies of my project. The dependencies used in this project are non critical: typography.js, typography-theme-bootstrap, preact, and material-design-icons Use it if you want to, and discuss with me if you find bugs.