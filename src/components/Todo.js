import { div, n, input, e, ul, li, h1 } from '../lib/elements';
import { zoomIn } from '../lib/animation';
import { colors } from '../lib/theme';
import {
  addTodo,
  todoErrorMessage,
  todoSuccessMessage,
  clearTodoMessage,
  completeTodo,
  destroyTodo,
  currentTodoInput
} from '../lib/mutators';
import { setState, getState } from '../lib/state';
import styled from '../lib/styled';
import Form from '../components/Form';
import Button from '../components/Button';

const TodoMessage = styled(function TodoMessage({ className }) {
  when(getState('todoMessage').message, () => setState(clearTodoMessage()), 1500);
  return div({ className }, getState('todoMessage').message);
})`
& {
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  transition: 250ms;
  padding: 1em;
  color: white;
    background: ${() => {
  switch (getState('todoMessage').type) {
    case 'success':
      return colors.green.shade_700;
    case 'error':
      return colors.red.shade_700;
    default:
      return 'transparent';
  }
}};
  transform: ${() => getState('todoMessage').message ? 'translateY(0)' : 'translateY(100%)'};
}
`;

function TodoForm() {
  return e(
    Form,
    n,
    input({
      placeholder: 'Add Todo',
      value: getState('currentTodoInput'),
      onInput: event => setState(currentTodoInput(event.target.value))
    }),
    // e(
    //   Button,
    //   {
    //     bg: colors.blue.shade_700,
    //     onClick: event => {
    //       function setTodo(times) {
    //         if (times) {
    //           setState(
    //             addTodo({ name: 'Todo ' + times })
    //           ).then(state => setState(todoSuccessMessage('Sucessfully add todo!')));
    //           setTodo(times - 1);
    //         }
    //       }
    //       setTodo(100);
    //     }
    //   },
    //   'Add 100 Todo'
    // ),
    e(
      Button,
      {
        bg: colors.blue.shade_700,
        onClick: event => getState('currentTodoInput') ? setState(addTodo({
                name: getState('currentTodoInput'),
                id: `todo_${Date.now()}`
              })).then(state => setState(todoSuccessMessage('Sucessfully add todo!'))) : setState(todoErrorMessage('You need to input your todo!'))
      },
      'Add Todo'
    )
  );
}

const TodoList = styled(function TodoList({ className }) {
  return ul({ className }, getState('todos').map(todo => li(
      { key: todo.id },
      todo.complete ? e('del', n, todo.name) : todo.name,
      e(
        Button,
        {
          small: true,
          bg: colors.red.shade_700,
          onClick: event =>
            setState(destroyTodo(todo.id)).then(state =>
              setState(todoSuccessMessage('Sucessfully delete todo!')))
        },
        'Destroy Todo'
      ),
      !todo.complete &&
        e(
          Button,
          {
            small: true,
            bg: colors.blue.shade_700,
            onClick: event =>
              setState(completeTodo(todo.id)).then(state =>
                setState(todoSuccessMessage('Sucessfully complete todo!')))
          },
          'Complete Todo'
        )
    )));
})`
  & button {
      float: right;
    }
  & li {
    transform-origin: left top;
    animation: ${zoomIn} 250ms;
  }
  & li:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const Todo = props =>
  div(
    { className: 'page' },
    div({ className: 'page-header' }, h1(n, 'Todo Example')),
    div({ className: 'page-content' }, e(TodoForm), e(TodoList)),
    e(TodoMessage)
  );

export default Todo;

function when(condition, cb, delay) {
  if (condition) {
    if (delay) {
      return void setTimeout(cb, delay);
    }
    return cb();
  }
}
