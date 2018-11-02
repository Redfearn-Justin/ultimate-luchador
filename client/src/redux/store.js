import { createStore } from 'redux';

const defaultStore = {
    pageName: "Splash",
    totalWins: 0,
    active_player: {}
}

const storeData = (state = defaultStore, action) => {
    switch (action.type) {
        case 'SET_PAGE_NAME':
            return {
                pageName: action.pageName,
            }
        case 'INCREMENT_WINS':
            return {
                totalWins: state.totalWins + 1
            }
        default:
             return state;
    }
}

const store = createStore(
    storeData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
export default store;

// object assign in our switch case to 
// return Object.assign({}, state.active_player,{attk: 25})