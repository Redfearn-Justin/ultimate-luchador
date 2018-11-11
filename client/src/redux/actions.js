export const setPageName = (pageName) => ({type: 'SET_PAGE_NAME', pageName});

export const levelUp = (exp, lvl, hp, tickets, refresh) => ({type: 'LEVEL_UP', exp, lvl, hp, tickets, refresh});

export const chooseOpponent = (pageName, id) => ({type: 'CHOOSE_OPPONENT', pageName, id});

export const fightResults = (pageName, outcome, textCss, id) => ({type: 'FIGHT_RESULTS', pageName, outcome, textCss, id});

export const updateExpFame = (exp, fame, wins, losses) => ({type: 'UPDATE_EXP_FAME', exp, fame, wins, losses});

export const useTicket = (pageName, tickets) => ({type: 'USE_TICKET', pageName, tickets});

export const useRefresh = (refresh, tickets) => ({type: 'USE_REFRESH', refresh, tickets});

export const newAbility1 = (pageName, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon) => ({type: 'NEW_AB_1', pageName, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon});

export const newAbility2 = (pageName, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon) => ({type: 'NEW_AB_2', pageName, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon});

export const newAbility3 = (pageName, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon) => ({type: 'NEW_AB_3', pageName, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon});

export const loginData = (pageName, id, token, last_login, char_name, profile_pic, exp, lvl, new_ability, fame, hp, fights, wins, losses, tickets, tickets_max, refresh, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon) => ({type: 'LOGIN_DATA', pageName, id, token, last_login, char_name, profile_pic, exp, lvl, new_ability, fame, hp, fights, wins, losses, tickets, tickets_max, refresh, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon});
