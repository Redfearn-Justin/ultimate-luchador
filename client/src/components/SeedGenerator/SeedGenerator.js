// THESE ARE METHODS THAT CAN BE PUT INTO A COMPONENT
// THE PURPOSE OF THIS SCRIPT IS TO GENERATE 'X' NUMBER OF NPC SEEDS FOR OUR DATABASE
// ITS DOPE

randomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

randomIcon = () => {
    var randNumer = Math.floor(Math.random() * 20) + 1;
    var path = "./images/icon" + randNumer + ".svg";
    return path;
}

randomName = () => {
    var names = ["El Rockero", "Sangre Misterio", "Spanko", "Huevos Mojado", "El Lobo Rojo", "Zorro Rosa", "Gordo", "El Matador", "La Pantera", "Gigante", "Astronauta", "Rosa Grande", "El Tigre Guapo", "El Tigre", "La Mano", "El Maestro", "Loco-Loco", "Ojo Mejor", "The Machine", "Rebel", "Red Pants", "Big Ol Dude", "Tiberius Bone", "Zeal", "Cyruss", "Megatron", "Thanos", "Spiderman", "El Chupacabra", "Jay-z", "Mendigo", "Cleopatera", "Mama Mia", "Pelo", "Vestido", "Cibernético", "El Chango", "Misterioso", "Mega Lento", "Zorro Malo", "El Sombrero", "Sangre Misterio", "El Gigolo", "Anaranjado", "Chile Lento", "Zorro", "Turbo Mejor", "Flaco", "El Kulo Feo", "The Big Man"];
    var randomNameNumber = Math.floor(Math.random() * 49) + 1;
    var nameReturn = names[randomNameNumber];
    return nameReturn;
}

randomAbilityName = () => {
    var names = ["the big punch", "trounce", "butt bash", "hair fwip", "dong destroyer", "mega punch", "ultra kapow", "knee to the face", "poop on the floor", "backflip", "shotgun to the chest", "car smash", "gallop punch", "wheelhouse kick", "verbose insult", "spilled milk", "passive agression", "earthquake", "lightning strike", "zap punch", "tower dive", "fire kick", "flying elbow", "butter elbow", "do the wurm", "punch then punch again", "wow", "destroying poke", "ultra burp", "fart on your face", "onion breath", "pukes on you", "fucks ur mom", "files ur taxes incorrectly", "sets fire to your lawn", "kicks your dog", "calls your wife fat", "literally nothing","water punch", "lightning whirl", "bunch of punch", "fist storm", "foot storm", "mega kick", "karate chop", "dick slap", "shits his pants", "laughs", "ninja star", "whip", "big ol' sword", "battle axe", "lead gloves", "sacramento slam", "talahassee tickle", "tickle", "poke", "prod", "head massage", "prostate exam", "fucks ur dad", "never calls ur mom back", "forgets your name", "lava punch", "teleport punch", "time stop slap", "kidney shot", "cheap shot", "ultra mega fuckin' punch", "crazy strong attack", "shit on your face", "rock throw", "magic bolt", "magic missle", "lucha-slam", "slam dunk", "touchdown", "gotemmmmm", "fucking punch", "super attack", "gucci bandana", "spike ball", "insect swarm", "stiff arm", "clothesline", "pow pow pow", "big dump", "bullet from a gun", "dropped piano", "slipped on a peel", "grand slam", "special edition", "bitch", "grandmaster slap", "gossip", "brick toss", "ruthless insult", "called you poor", "stole yo girl", "kicked u in the dick", "fireball"];
    var randomNameNumber = Math.floor(Math.random() * 100) + 1;
    var nameReturn = names[randomNameNumber];
    return nameReturn;
}

createAb = () => {
    var myString = "";
    var lvl = 1;
    var fame = 0;
    
    for (let i = 1; i < 151; i++) {
        var rollSpeed = Math.floor(Math.random() * 100) + 1;
        var mp = 1;
        var hp = this.getRandomInteger(100, 130);
        var charName = this.randomName();
        var ab1_name = this.randomAbilityName();
        var ab2_name = this.randomAbilityName();
        var ab3_name = this.randomAbilityName();
        var dlow1;
        var dhigh1;
        var speed1;
        var crit1;
        var fail1;
        var color1;
        var icon1;
        var dlow2;
        var dhigh2;
        var speed2;
        var crit2;
        var fail2;
        var color2;
        var icon2;
        var dlow3;
        var dhigh3;
        var speed3;
        var crit3;
        var fail3;
        var color3;
        var icon3;

        var oneOrTwo = this.getRandomInteger(1, 2);
        fame += oneOrTwo;

        if (i % 10 == 0) {
            lvl++
            if (lvl >= 4 && lvl < 8) {
                mp = 1.1;
            } else if (lvl >= 8 && lvl < 10) {
                mp = 1.2;
            } else if (lvl >= 10) {
                mp = 1.3;
            } else if (lvl >= 13) {
                mp = 1.4;
            }
        };

        if (rollSpeed >= 1 && rollSpeed <= 45) {
            dlow1 = Math.floor(this.getRandomInteger(4,8) * mp);
            dhigh1 = Math.floor(this.getRandomInteger(9,15) * mp);
            speed1 = 5;
            crit1 = Math.floor((this.getRandomInteger(8,12) * mp)) / 100;
            fail1 = Math.floor((this.getRandomInteger(3,8) * mp)) / 100;
            color1 = this.randomColor();
            icon1 = this.randomIcon();
        } else if (rollSpeed >= 46 && rollSpeed <= 70) {
            dlow1 = Math.floor(this.getRandomInteger(5,10) * mp);
            dhigh1 = Math.floor(this.getRandomInteger(11,17) * mp);
            speed1 = 4;
            crit1 = Math.floor((this.getRandomInteger(10,14) * mp)) / 100;
            fail1 = Math.floor((this.getRandomInteger(4,9) * mp)) / 100;
            color1 = this.randomColor();
            icon1 = this.randomIcon();
        } else if (rollSpeed >= 71 && rollSpeed <= 85) {
            dlow1 = Math.floor(this.getRandomInteger(6,12) * mp);
            dhigh1 = Math.floor(this.getRandomInteger(13,18) * mp);
            speed1 = 3;
            crit1 = Math.floor((this.getRandomInteger(11,15) * mp)) / 100;
            fail1 = Math.floor((this.getRandomInteger(5,9) * mp)) / 100;
            color1 = this.randomColor();
            icon1 = this.randomIcon();
        } else if (rollSpeed >= 86 && rollSpeed <= 95) {
            dlow1 = Math.floor(this.getRandomInteger(8,15) * mp);
            dhigh1 = Math.floor(this.getRandomInteger(16,21) * mp);
            speed1 = 2;
            crit1 = Math.floor((this.getRandomInteger(12,16) * mp)) / 100;
            fail1 = Math.floor((this.getRandomInteger(6,9) * mp)) / 100;
            color1 = this.randomColor();
            icon1 = this.randomIcon();
        } else if (rollSpeed >= 96 && rollSpeed <= 100) {
            dlow1 = Math.floor(this.getRandomInteger(10,20) * mp);
            dhigh1 = Math.floor(this.getRandomInteger(21,30) * mp);
            speed1 = 1;
            crit1 = Math.floor((this.getRandomInteger(13,19) * mp)) / 100;
            fail1 = Math.floor((this.getRandomInteger(6,10) * mp)) / 100;
            color1 = this.randomColor();
            icon1 = this.randomIcon();
        };

        myString += `INSERT INTO players (npc, char_name, profile_pic, lvl, fame, hp, ab1_name, ab1_dlow, ab1_dhigh, ab1_speed, ab1_crit, ab1_fail, ab1_color, ab1_icon, ab2_name, ab2_dlow, ab2_dhigh, ab2_speed, ab2_crit, ab2_fail, ab2_color, ab2_icon, ab3_name, ab3_dlow, ab3_dhigh, ab3_speed, ab3_crit, ab3_fail, ab3_color, ab3_icon) `;

        myString += `VALUES (1, "${charName}", "./images/fighter.jpg", ${lvl}, ${fame}, ${hp}, "${ab1_name}", ${dlow1}, ${dhigh1}, ${speed1}, ${crit1}, ${fail1}, "${color1}", "${icon1}", `

        var rollSpeed2 = Math.floor(Math.random() * 100) + 1;

        if (rollSpeed2 >= 1 && rollSpeed2 <= 45) {
            dlow2 = Math.floor(this.getRandomInteger(4,8) * mp);
            dhigh2 = Math.floor(this.getRandomInteger(9,15) * mp);
            speed2 = 5;
            crit2 = Math.floor((this.getRandomInteger(8,12) * mp)) / 100;
            fail2 = Math.floor((this.getRandomInteger(3,8) * mp)) / 100;
            color2 = this.randomColor();
            icon2 = this.randomIcon();
        } else if (rollSpeed2 >= 46 && rollSpeed2 <= 70) {
            dlow2 = Math.floor(this.getRandomInteger(5,10) * mp);
            dhigh2 = Math.floor(this.getRandomInteger(11,17) * mp);
            speed2 = 4;
            crit2 = Math.floor((this.getRandomInteger(10,14) * mp)) / 100;
            fail2 = Math.floor((this.getRandomInteger(4,9) * mp)) / 100;
            color2 = this.randomColor();
            icon2 = this.randomIcon();
        } else if (rollSpeed2 >= 71 && rollSpeed2 <= 85) {
            dlow2 = Math.floor(this.getRandomInteger(6,12) * mp);
            dhigh2 = Math.floor(this.getRandomInteger(13,18) * mp);
            speed2 = 3;
            crit2 = Math.floor((this.getRandomInteger(11,15) * mp)) / 100;
            fail2 = Math.floor((this.getRandomInteger(5,9) * mp)) / 100;
            color2 = this.randomColor();
            icon2 = this.randomIcon();
        } else if (rollSpeed2 >= 86 && rollSpeed2 <= 95) {
            dlow2 = Math.floor(this.getRandomInteger(8,15) * mp);
            dhigh2 = Math.floor(this.getRandomInteger(16,21) * mp);
            speed2 = 2;
            crit2 = Math.floor((this.getRandomInteger(12,16) * mp)) / 100;
            fail2 = Math.floor((this.getRandomInteger(6,9) * mp)) / 100;
            color2 = this.randomColor();
            icon2 = this.randomIcon();
        } else if (rollSpeed2 >= 96 && rollSpeed2 <= 100) {
            dlow2 = Math.floor(this.getRandomInteger(10,20) * mp);
            dhigh2 = Math.floor(this.getRandomInteger(21,30) * mp);
            speed2 = 1;
            crit2 = Math.floor((this.getRandomInteger(13,19) * mp)) / 100;
            fail2 = Math.floor((this.getRandomInteger(6,10) * mp)) / 100;
            color2 = this.randomColor();
            icon2 = this.randomIcon();
        };

        myString += `"${ab2_name}", ${dlow2}, ${dhigh2}, ${speed2}, ${crit2}, ${fail2}, "${color2}", "${icon2}", `;

        var rollSpeed3 = Math.floor(Math.random() * 100) + 1;

        if (rollSpeed3 >= 1 && rollSpeed3 <= 45) {
            dlow3 = Math.floor(this.getRandomInteger(4,8) * mp);
            dhigh3 = Math.floor(this.getRandomInteger(9,15) * mp);
            speed3 = 5;
            crit3 = Math.floor((this.getRandomInteger(8,12) * mp)) / 100;
            fail3 = Math.floor((this.getRandomInteger(3,8) * mp)) / 100;
            color3 = this.randomColor();
            icon3 = this.randomIcon();
        } else if (rollSpeed3 >= 46 && rollSpeed3 <= 70) {
            dlow3 = Math.floor(this.getRandomInteger(5,10) * mp);
            dhigh3 = Math.floor(this.getRandomInteger(11,17) * mp);
            speed3 = 4;
            crit3 = Math.floor((this.getRandomInteger(10,14) * mp)) / 100;
            fail3 = Math.floor((this.getRandomInteger(4,9) * mp)) / 100;
            color3 = this.randomColor();
            icon3 = this.randomIcon();
        } else if (rollSpeed3 >= 71 && rollSpeed3 <= 85) {
            dlow3 = Math.floor(this.getRandomInteger(6,12) * mp);
            dhigh3 = Math.floor(this.getRandomInteger(13,18) * mp);
            speed3 = 3;
            crit3 = Math.floor((this.getRandomInteger(11,15) * mp)) / 100;
            fail3 = Math.floor((this.getRandomInteger(5,9) * mp)) / 100;
            color3 = this.randomColor();
            icon3 = this.randomIcon();
        } else if (rollSpeed3 >= 86 && rollSpeed3 <= 95) {
            dlow3 = Math.floor(this.getRandomInteger(8,15) * mp);
            dhigh3 = Math.floor(this.getRandomInteger(16,21) * mp);
            speed3 = 2;
            crit3 = Math.floor((this.getRandomInteger(12,16) * mp)) / 100;
            fail3 = Math.floor((this.getRandomInteger(6,9) * mp)) / 100;
            color3 = this.randomColor();
            icon3 = this.randomIcon();
        } else if (rollSpeed3 >= 96 && rollSpeed3 <= 100) {
            dlow3 = Math.floor(this.getRandomInteger(10,20) * mp);
            dhigh3 = Math.floor(this.getRandomInteger(21,30) * mp);
            speed3 = 1;
            crit3 = Math.floor((this.getRandomInteger(13,19) * mp)) / 100;
            fail3 = Math.floor((this.getRandomInteger(6,10) * mp)) / 100;
            color3 = this.randomColor();
            icon3 = this.randomIcon();
        };

        myString += `"${ab3_name}", ${dlow3}, ${dhigh3}, ${speed3}, ${crit3}, ${fail3}, "${color3}", "${icon3}"); `;

    } // for loop end
    console.log(myString);
};