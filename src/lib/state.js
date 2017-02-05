const { setInitialState } = require('./lib');
const { saveHistoryOfState, lastMutated } = require('./middlewares');

module.exports = setInitialState(
    {
        counter: 0,
        list: [],
        loading: {},
        todos: [],
        currentTodoInput: '',
        todoMessage: {},
        scrolled: false,
        tumblrMessage: '',
        tumblrs: [],
        tumblrList: [],
        tumblrSearchForm: {},
        tumblrSearchLoading: false,
        location: { ...window.location },
        ...JSON.parse(localStorage.getItem('state'))
    },
    [saveHistoryOfState, lastMutated]
);
