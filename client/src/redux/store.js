import { createStore } from 'redux';

const defaultStore = {
    pageName: "Splash",
    inactiveId: "x",
    outcome: "x",
    textCss: "x",
    id: "x",
    token: "x",
    last_login: "x",
    char_name: "x",
    profile_pic: "x",
    exp: "x",
    lvl: "x",
    new_ability: "x",
    fame: "x",
    hp: "x",
    fights: "x",
    wins: "x",
    losses: "x",
    tickets: "x",
    tickets_max: "x",
    refresh: "x",
    ab1_name: "x",
    ab1_dlow: "x",
    ab1_dhigh: "x",
    ab1_speed: "x",
    ab1_crit: "x",
    ab1_fail: "x",
    ab1_color: "x",
    ab1_icon: "x",
    ab2_name: "x",
    ab2_dlow: "x",
    ab2_dhigh: "x",
    ab2_speed: "x",
    ab2_crit: "x",
    ab2_fail: "x",
    ab2_color: "x",
    ab2_icon: "x",
    ab3_name: "x",
    ab3_dlow: "x",
    ab3_dhigh: "x",
    ab3_speed: "x",
    ab3_crit: "x",
    ab3_fail: "x",
    ab3_color: "x",
    ab3_icon: "x"
}

const storeData = (state = defaultStore, action) => {
    switch (action.type) {
        case 'SET_PAGE_NAME':
            return Object.assign({}, state, {
                pageName: action.pageName,
            })
        case 'USE_TICKET':
            return Object.assign({}, state, {
                pageName: action.pageName,
                tickets: action.tickets,
            })
        case 'USE_REFRESH':
            return Object.assign({}, state, {
                refresh: action.refresh,
                tickets: action.tickets,
            })
        case 'CHOOSE_OPPONENT':
            return Object.assign({}, state, {
                pageName: action.pageName,
                inactiveId: action.id
            })
        case 'FIGHT_RESULTS':
            return Object.assign({}, state, {
                pageName: action.pageName,
                outcome: action.outcome,
                textCss: action.textCss,
                inactiveId: action.id
            })
        case 'UPDATE_EXP_FAME':
            return Object.assign({}, state, {
                exp: action.exp,
                fame: action.fame,
                wins: action.wins,
                losses: action.losses
            })
        case 'CHANGE_PICTURE':
            return Object.assign({}, state, {
                profile_pic: action.picture
            })
        case 'LEVEL_UP':
            return Object.assign({}, state, {
                exp: action.exp,
                lvl: action.lvl,
                hp: action.hp,
                refresh: action.refresh,
                tickets: action.tickets,
                tickets_max: action.tickets
            })
        case 'NEW_AB_1':
            return Object.assign({}, state, {
                pageName: action.pageName,
                ab1_name: action.ab1_name,
                ab1_dlow: action.ab1_dlow,
                ab1_dhigh: action.ab1_dhigh,
                ab1_speed: action.ab1_speed,
                ab1_crit: action.ab1_crit,
                ab1_fail: action.ab1_fail,
                ab1_color: action.ab1_color,
                ab1_icon: action.ab1_icon,
            })
        case 'NEW_AB_2':
            return Object.assign({}, state, {
                pageName: action.pageName,
                ab2_name: action.ab2_name,
                ab2_dlow: action.ab2_dlow,
                ab2_dhigh: action.ab2_dhigh,
                ab2_speed: action.ab2_speed,
                ab2_crit: action.ab2_crit,
                ab2_fail: action.ab2_fail,
                ab2_color: action.ab2_color,
                ab2_icon: action.ab2_icon,
            })
        case 'NEW_AB_3':
            return Object.assign({}, state, {
                pageName: action.pageName,
                ab3_name: action.ab3_name,
                ab3_dlow: action.ab3_dlow,
                ab3_dhigh: action.ab3_dhigh,
                ab3_speed: action.ab3_speed,
                ab3_crit: action.ab3_crit,
                ab3_fail: action.ab3_fail,
                ab3_color: action.ab3_color,
                ab3_icon: action.ab3_icon,
            })
        case 'LOGIN_DATA':
            return Object.assign({}, state, {
                pageName: action.pageName,
                id: action.id,
                token: action.token,
                last_login: action.last_login,
                char_name: action.char_name,
                profile_pic: action.profile_pic,
                exp: action.exp,
                lvl: action.lvl,
                new_ability: action.new_ability,
                fame: action.fame,
                hp: action.hp,
                fights: action.fights,
                wins: action.wins,
                losses: action.losses,
                tickets: action.tickets,
                tickets_max: action.tickets_max,
                refresh: action.refresh,
                ab1_name: action.ab1_name,
                ab1_dlow: action.ab1_dlow,
                ab1_dhigh: action.ab1_dhigh,
                ab1_speed: action.ab1_speed,
                ab1_crit: action.ab1_crit,
                ab1_fail: action.ab1_fail,
                ab1_color: action.ab1_color,
                ab1_icon: action.ab1_icon,
                ab2_name: action.ab2_name,
                ab2_dlow: action.ab2_dlow,
                ab2_dhigh: action.ab2_dhigh,
                ab2_speed: action.ab2_speed,
                ab2_crit: action.ab2_crit,
                ab2_fail: action.ab2_fail,
                ab2_color: action.ab2_color,
                ab2_icon: action.ab2_icon,
                ab3_name: action.ab3_name,
                ab3_dlow: action.ab3_dlow,
                ab3_dhigh: action.ab3_dhigh,
                ab3_speed: action.ab3_speed,
                ab3_crit: action.ab3_crit,
                ab3_fail: action.ab3_fail,
                ab3_color: action.ab3_color,
                ab3_icon: action.ab3_icon
            })
        default:
            return state;
    }
}

const store = createStore(
    storeData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
export default store;