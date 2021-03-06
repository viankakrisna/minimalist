import { div, n, p, e, br, h1 } from "../lib/elements";
import { colors } from "../lib/theme";
import {
  increment,
  decrement,
  asyncDecrement,
  asyncIncrement
} from "../lib/mutators";
import { setState, getState } from "../lib/state";
import Button from "../components/Button";

const Counter = props => div(
  { className: "page" },
  div({ className: "page-header" }, h1(n, "Counter Example")),
  div(
    { className: "page-content", style: { textAlign: "center" } },
    p(n, "Current counter:"),
    p(
      { style: { fontSize: "72px", lineHeight: "1em", marginBottom: "0.5em" } },
      getState().counter
    ),
    e(
      Button,
      { bg: colors.blue.shade_700, onClick: e => setState(increment(1)) },
      "Increment"
    ),
    e(
      Button,
      { bg: colors.red.shade_700, onClick: e => setState(decrement(1)) },
      "Decrement"
    ),
    br(),
    e(
      Button,
      {
        bg: colors.green.shade_700,
        color: "white",
        onClick: e => {
          setState(asyncIncrement.loading());
          setTimeout(
            () => {
              setState(asyncIncrement.success(123));
            },
            1000
          );
        },
        disabled: getState().loading.asyncIncrement
      },
      "Async Increment"
    ),
    e(
      Button,
      {
        bg: colors.yellow.shade_700,
        color: "black",
        onClick: e => {
          setState(asyncDecrement.loading());
          setTimeout(
            () => {
              setState(asyncDecrement.success(123));
            },
            1000
          );
        },
        disabled: getState().loading.asyncDecrement
      },
      "Async Decrement"
    )
  )
);

export default Counter;
