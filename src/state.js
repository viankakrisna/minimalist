import {setInitialState} from './lib'
module.exports = setInitialState({
  counter: 0,
  list: [],
  loading: {},
  location: {...window.location},
  ...void JSON.parse(localStorage.getItem('state'))
}, [saveHistoryOfState, lastMutated])

//middleware for storing history
const stateHistory = []
function saveHistoryOfState(state){
  stateHistory.push(state)
  localStorage.setItem('state', JSON.stringify(state))
  return state
}
function lastMutated(state, mutatorName, mutation){
  state.lastMutator = mutatorName
  state.lastMutated = Date.now()
  console.log(mutatorName, mutation)
  return state
}