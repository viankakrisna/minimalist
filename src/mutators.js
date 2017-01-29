//instead in reducers we mutate the state in the mutators
export const navigate = where => function NAVIGATE(state) {
  const pathname = typeof where === 'string' ? where : where.pathname;
  const hashchange = true;
  if (hashchange) {
    window.location.hash = pathname;
  } else {
    window.history.pushState(null, null, pathname);
  }
  return {
    location: typeof where === 'string' ? { pathname: where } : where,
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

export const addTodo = newTodo => function ADD_TODO(state) {
  return { todos: state.todos.concat([ newTodo ]), currentTodoInput: '' };
};

export const addTodoError = errorMessage => function ADD_TODO_ERROR(state) {
  return { addTodoMessage: { type: 'error', message: errorMessage } };
};

export const addTodoSuccess = successMessage =>
  function ADD_TODO_SUCCESS(state) {
    return { addTodoMessage: { type: 'success', message: successMessage } };
  };

export const destroyTodo = todoId => function DESTROY_TODO(state) {
  return { todos: state.todos.filter(todo => todo.id !== todoId) };
};

export const currentTodoInput = text => function CURRENT_TODO_INPUT(state) {
  return { currentTodoInput: text, addTodoMessage: false };
};

export const clearAddTodoMessage = () => function CURRENT_TODO_INPUT(state) {
  return { addTodoMessage: false };
};

