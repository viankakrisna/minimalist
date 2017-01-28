import { e, n, h1, div } from "./elements";
import styled from "./styled";
import Counter from "./Counter";
import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { getState } from "./state";
import { colors } from "./theme";
import Typography from "typography";
import typographyTheme from "typography-theme-bootstrap";
const typography = new Typography(typographyTheme);
const Match = props =>
  getState().location.pathname === props.pathname ? props.children[0] : null;

const App = styled(function App(props) {
  return div(
    { className: props.className },
    e(Header),
    e(Match, { pathname: "/" }, e(Home)),
    e(
      Match,
      { pathname: "/counter" },
      div(
        { className: "page" },
        div({ className: "page-header" }, h1(n, "Counter Example")),
        div({ className: "page-content" }, e(Counter))
      )
    ),
    e(Match, { pathname: "/login" }, e(Login)),
    e(Match, { pathname: "/register" }, e(Register)),
    e(Match, { pathname: "/*" }, e(Register))
  );
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
  background: ${() => colors.blue.shade_800};
  overflow: hidden;
  margin-bottom: -3.5em;
  color: white;
  text-align: center;
  padding: 5em 1em 7.5em;
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
`;

export default App;

