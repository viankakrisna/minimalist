import { setState } from "./state";
import { jsonp } from "./api";
import { hashHistory } from "./config";
//instead in reducers we mutate the state in the mutators
export const navigate = where => function NAVIGATE(state) {
  const pathname = typeof where === "string" ? where : where.pathname;
  if (hashHistory) {
    global.location.hash = pathname;
  } else {
    global.history.pushState(null, null, pathname);
  }
  return {
    location: typeof where === "string" ? { pathname: where } : where,
    menuOpen: false
  };
};

export const menuOpen = isOpen => function MENU_OPEN(state) {
  return { menuOpen: isOpen };
};

export const increment = howMuch => function COUNTER_INCREMENT(state) {
  return { counter: state.counter + howMuch };
};

export const decrement = howMuch => function COUNTER_DECREMENT(state) {
  return { counter: state.counter - howMuch };
};

export const asyncDecrement = {
  loading: () => function ASYNC_DECREMENT_LOADING(state) {
    return { loading: { ...state.loading, asyncDecrement: true } };
  },
  success: howMuch => function ASYNC_DECREMENT_SUCCESS(state) {
    return {
      counter: state.counter - howMuch,
      loading: { ...state.loading, asyncDecrement: false }
    };
  },
  error: () => function ASYNC_DECREMENT_ERROR(state) {
    return { loading: { ...state.loading, asyncDecrement: false } };
  }
};

export const asyncIncrement = {
  loading: () => function ASYNC_INCREMENT_LOADING(state) {
    return { loading: { ...state.loading, asyncIncrement: true } };
  },
  success: howMuch => function ASYNC_INCREMENT_SUCCESS(state) {
    return {
      counter: state.counter + howMuch,
      loading: { ...state.loading, asyncIncrement: false }
    };
  },
  error: () => function ASYNC_INCREMENT_ERROR(state) {
    return { loading: { ...state.loading, asyncIncrement: false } };
  }
};

let id = 0;
export const addTodo = newTodo => function ADD_TODO(state) {
  return {
    todos: state.todos.concat([{ ...newTodo, id: id++ }]),
    currentTodoInput: ""
  };
};

export const todoErrorMessage = errorMessage =>
  function TODO_ERROR_MESSAGE(state) {
    return { todoMessage: { type: "error", message: errorMessage } };
  };

export const todoSuccessMessage = successMessage =>
  function TODO_SUCCESS_MESSAGE(state) {
    return { todoMessage: { type: "success", message: successMessage } };
  };

export const destroyTodo = todoId => function DESTROY_TODO(state) {
  return { todos: state.todos.filter(todo => todo.id !== todoId) };
};

export const completeTodo = todoId => function DESTROY_TODO(state) {
  return {
    todos: state.todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, complete: true };
      }
      return todo;
    })
  };
};

export const currentTodoInput = text => function CURRENT_TODO_INPUT(state) {
  return { currentTodoInput: text, todoMessage: {} };
};

export const clearTodoMessage = () => function CLEAR_TODO_MESSAGE(state) {
  return { todoMessage: {} };
};

export const tumblrSearchFormChange = formData =>
  function TUMBLR_SEARCH_FORM_CHANGE(state) {
    return { tumblrSearchForm: { ...formData }, tumblrSearchLoading: false };
  };

export const tumblrSearch = q => function TUMBLR_SEARCH(state) {
  jsonp.get(
    `https://api.tumblr.com/v2/tagged?tag=${q.query}&filter=text&api_key=fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4`,
    {},
    ({ response }) => {
      setState({ tumblrList: response, tumblrSearchLoading: false });
    }
  );

  return { tumblrSearchLoading: true };
};

export const tumblrErrorMessage = errorMessage =>
  function TUMBLR_ERROR_MESSAGE(state) {
    return { tumblrMessage: { type: "error", message: errorMessage } };
  };

export const tumblrMessageClear = () => createEmptyObjectMutator({
  name: "CLEAR_TUMBLR_MESSAGE",
  key: "tumblrMessage"
});

function createEmptyObjectMutator({ name, key }) {
  const emptyObjectMutator = state => {
    return { [key]: {} };
  };
  emptyObjectMutator.name = name;
  return emptyObjectMutator;
}
