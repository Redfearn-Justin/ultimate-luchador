export const setPageName = pageName => ({type: 'SET_PAGE_NAME', pageName});
export const loginToken = (pageName, token) => ({type: 'LOGIN_TOKEN', pageName, token});
export const incrementWins = () => ({type: 'INCREMENT_WINS'});
export const getAllData = (id, token, last_login, char_name, profile_pic, exp, lvl, new_ability, fame, hp, fights, wins, losses, tickets, tickets_max, refresh,  ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon) => ({type: 'GET_ALL_DATA', id, token, last_login, char_name, profile_pic, exp, lvl, new_ability, fame, hp, fights, wins, losses, tickets, tickets_max, refresh,  ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon});

export const changeHp = newHp => ({type: 'CHANGE_HP', newHp});
