import { setInitialState } from './lib';
import { saveHistoryOfState, lastMutated } from './middlewares';

module.exports = setInitialState(
  {
    counter: 0,
    list: [],
    loading: {},
    todos: [],
    currentTodoInput: '',
    todoMessage: {},
    location: { ...window.location },
    ...JSON.parse(localStorage.getItem('state'))
  },
  [ saveHistoryOfState, lastMutated ]
);

