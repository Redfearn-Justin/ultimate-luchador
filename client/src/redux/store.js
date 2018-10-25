import { createStore } from 'redux';

const defaultStore = {
    pageName: "home",
    totalWins: 0,
}

const storeData = (state = defaultStore, action) => {
    switch (action.type) {
        case 'SET_PAGE_NAME':
            return {
                pageName: action.pageName,
                totalWins: state.totalWins
            }
        case 'INCREMENT_WINS':
            return {
                pageName: state.pageName,
                totalWins: state.totalWins + 1
            }
        default:
             return state;
    }
}

const store = createStore(
    storeData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;