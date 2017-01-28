import { div, n, p, e, br } from "./elements";
import { colors } from "./theme";
import {
  increment,
  decrement,
  asyncDecrement,
  asyncIncrement
} from "./mutators";
import { setState, getState } from "./state";
import Button from "./Button";

const Counter = props => div(
  { style: { textAlign: "center" } },
  p({ style: { fontSize: "72px", lineHeight: "144px" } }, getState().counter),
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
  ),
  getState("list").map(item => div(n, item)).reverse()
);

export default Counter;

