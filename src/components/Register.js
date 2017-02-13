import { fieldset, form, input, label, div, h1, n, e } from "../lib/elements";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Register(props) {
  return e(
    Form,
    { className: props.className },
    fieldset(
      n,
      h1(n, "Register"),
      div(n, label(n, "Email"), input({ type: "email" })),
      div(n, label(n, "Password"), input({ type: "password" })),
      div(n, e(Button, { type: "submit", bg: "blue", block: true }, "Submit"))
    )
  );
}
