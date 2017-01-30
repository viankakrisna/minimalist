//middleware for storing history
// const stateHistory = [];
export function saveHistoryOfState(state) {
  // stateHistory.push(state);
  setTimeout(() => {
    localStorage.setItem('state', JSON.stringify(state));
  });
  return state;
}
export function lastMutated(state, mutatorName, mutation) {
  console.log(mutatorName, mutation);
  return state;
  // return { ...state, lastMutator: mutatorName, lastMutated: Date.now() };
}

