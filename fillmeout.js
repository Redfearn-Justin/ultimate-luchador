// Fill this out; just follow the instructions
// =========================================================

// --- LUCHADOR NAMES
// We need to populate as many random names as possible for NPCs. 
// Names MUST be between 7-16 characters, and they can contain spaces. Some random ones I came up with were "El Loco Rojo", "Megatron", and "The Machine".
// Populate this array with ~20 random Luchador/player names:
var characterNames = ["Mr Smitty", "El Esquelito", "The Flying Ah", "El Diablo", "Senior Jefe", "Chupacabra", "Jersey Devil", "Slamson", "The Holy Diver", "The Underminer", "The Flea", "Yojimbo", "Captain Tinactin", "All Might", "Black Jack", "Macho Nacho", "Gravedigger", "Nacho Business", "Despacito", "Bad Man Pajama"];

// --- COMMENTATOR PHRASES: FORMAT
// Commentator phrases are formatted as follows:  "WOAH," ____ "USED THE ATTACK" ____!
// They may also follow that phrase up with a random comment, like "THAT WILL HURT IN THE MORNING!"
// We are only creating phrases for the three phrases in quotes. 

// --- COMMENTATOR PHRASE 1: SURPRISE
// The first thing they will say is a reaction to the attack. THE NEXT WORD WILL BE THE CHARACTER'S NAME. Here are some basic examples:
// "WOAH,"   "HOLY COW,"   "ALL OF A SUDDEN"  "MR. "   "AHHHH"
// Populate this array with AT LEAST 10 random 'surprise' reactions that will come before the character's name:
var surpriseText = ["Huzzah", "Holy Moley Guacamole", "Ka POW", "Watch out", "Here comes the BOOM", "Ready or not", "This could get ugly", "INCOMING", "Coming in hot", "Cover your eyes" ];

// --- COMMENTATOR PHRASE 2: DESCRIPTION
// The second thing they will say after the character's name is a description of what they did. THE NEXT WORD WILL BE THE CHARACTER'S ATTACK. Here are some basic examples:
// "USED THE ATTACK"   "PUMMELED THEIR OPPONENT WITH"   "SHOOK THE FLOOR WITH"  "EXPLODED THE NIPS OF THE AUDIENCE WITH THE"   "SHIT THE BED WITH"
// Populate this array with AT LEAST 10 random 'description' reactions that will come after the character's name:
var descriptionText = ["swept the floor with", "took their opponent to church with the", "let their opponent have it with", "silenced the audience with", "aligned the planets with the", "cleaned their opponent's clock with", "made their opponent see stars with", "woke the dead with"];

// --- COMMENTATOR PHRASE 3: RANDOM QUIPS
// Finally, they might say something weird randomly. These messages will appear between attacks, and rarely.
// Imagine the commentator saying something off-the-cuff in a random, commentator-y way. Some random examples:
// "IN MY 85 YEARS COMMENTATING IVE NEVER SEEN ANYTHING LIKE IT" "IM GONNA NEED NEW UNDERWEAR AFTER THAT ONE!" "I HEARD THEY LEARNED THAT MOVE IN 'NAM"
// Populate this array with AT LEAST 10 random 'quips':
var quipText = ["DO YOU BELIEVE IN MIRACLES!? YES!", "Well butter my bottom and call me a biscuit!", "Ladies and gentlemen, you just witnessed history", "Ouchtown, population you, bro!", "Ladies and gentlemen, I have been to the Great Wall of China, I have seen the Pyramids of Egypt, But never in all my years as a sportscaster have I witnessed something as improbable, as impossible, as what we've witnessed here today!"];