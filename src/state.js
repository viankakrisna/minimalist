import { setInitialState } from './lib';
import { saveHistoryOfState, lastMutated } from './middlewares';

module.exports = setInitialState(
  {
    counter: 0,
    list: [],
    loading: {},
    location: { ...window.location },
    ...(void JSON.parse(localStorage.getItem('state')))
  },
  [ saveHistoryOfState, lastMutated ]
);

