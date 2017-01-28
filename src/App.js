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
const typography = new Typography({
  title: "Bootstrap",
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif"
  ],
  scaleRatio: 2.25,
  bodyWeight: 400,
  headerWeight: 500,
  boldWeight: "bold",
  overrideStyles: function overrideStyles(ref, options) {
    var adjustFontSizeTo = ref.adjustFontSizeTo,
      scale = ref.scale,
      rhythm = ref.rhythm;
    return {
      body: { color: (0, grey.default)(23, 204) },
      h1: scale(4 / 4),
      h2: scale(3 / 4),
      h3: scale(2 / 4),
      h4: scale(1 / 6),
      h5: scale((-1) / 6),
      h6: scale((-2) / 6),
      blockquote: Object.assign({}, scale(1 / 4), {
        borderLeft: rhythm(1 / 6) + " solid #eceeef",
        paddingTop: rhythm(1 / 3),
        paddingBottom: rhythm(1 / 3),
        paddingLeft: rhythm(2 / 3),
        paddingRight: rhythm(2 / 3)
      }),
      "blockquote > :last-child": { marginBottom: 0 },
      "blockquote cite": Object.assign(
        {},
        adjustFontSizeTo(options.baseFontSize),
        {
          color: (0, grey.default)(54, 204),
          fontWeight: options.bodyWeight,
          fontStyle: "normal"
        }
      )
    };
  }
});
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function grey(lightness, hue, darkBackground) {
  if (typeof hue === "undefined") {
    hue = 0;
  }
  if (typeof darkBackground === "undefined") {
    darkBackground = false;
  }

  // Convert named hues into numeric lightness value.
  if (hue === "cool") {
    hue = 237;
  } else if (hue === "slate") {
    hue = 122;
  } else if (hue === "warm") {
    hue = 69;
  }

  if (!isNumeric(hue)) {
    throw new Error("Hue is not a number");
  }

  if (!isNumeric(lightness)) {
    throw new Error("Lightness is not a number");
  }

  if (lightness > 100) {
    lightness = 100;
  }
  if (lightness < 0) {
    lightness = 0;
  }

  var saturation = 0;
  if (hue !== 0) {
    var a = 19.92978;
    var b = -0.3651759;
    var c = 0.001737214;
    saturation = a + b * lightness + c * Math.pow(lightness, 2);
  }

  var opacity = 0;
  if (darkBackground) {
    opacity = lightness / 100;
    lightness = "100%,";
  } else {
    opacity = (100 - lightness) / 100;
    lightness = "0%,";
  }

  return "hsla(" + hue + "," + saturation + "%," + lightness + opacity + ")";
}

