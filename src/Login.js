import {fieldset, form, input, label, div, h1, n, e} from './elements'
import Button from './Button'
import Form from './Form'

export default function Login(props){
    return e(Form, {className: props.className},
      fieldset(n,
        h1(n, 'Login'),
        div(n,
          label(n, 'Email'),
          input({type: 'email'})
        ),
        div(n,
          label(n, 'Password'),
          input({type: 'password'})
        ),
        div(n,
          e(Button, {type: 'submit', bg: 'blue', block: true}, 'Submit')
        )
      )
    )
}