INSERT INTO players (char_name)
VALUES ("Test");

SELECT * FROM players WHERE fame BETWEEN 201 and 215;

INSERT INTO players (npc, char_name, profile_pic, lvl, fame, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon)
VALUES (1, "Test", "pic file path", 1, 0, 5, 23, 5, .10, .05, "000000", "filepath", 5, 23, 5, .10, .05, "000000", "filepath", 5, 23, 5, .10, .05, "000000", "filepath");