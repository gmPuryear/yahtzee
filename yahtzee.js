// -----Plan-----
// -Create the scanner for user input
// -Need to determine how many players are playing
// - each player has its own score card
// -If its the players first roll, 5 dice have to be rolled
// -If not, player can only roll as many they want or can choose a suitable score to end their turn
// -Need to
// -Dice class for a dice with 6 sides and a roll method

// ---- Yahtzee Game -----

// creates prompt to grab user input
const prompt = require('prompt-sync')();
gameRunner();

function gameRunner() {
    numberOfPlayers();
}

// Check to see how many players are playing
function numberOfPlayers(){
    let numOfPlayers = prompt('How many players are playing? ');
    // console.log(numberOfPlayers);
    let confirmedNumOfPlayers = prompt('There are ' + numOfPlayers + " players? type 'y' or 'n': ");
    (confirmedNumOfPlayers === 'y' ? CreatePlayers(numOfPlayers) : numberOfPlayers());
}

class Player {
    constructor(name, onesTotal, twosTotal, threesTotal, foursTotal, fivesTotal, sixesTotal, threeOfAKind, fourOfAKind,
                fullHouse, smallStraight, largeStraight, chance, yahtzee) {
        this.name = name;
        this.onesTotal = onesTotal;
        this.onesTotal = onesTotal;
        this.twosTotal = twosTotal;
        this.threesTotal = threesTotal;
        this.foursTotal = foursTotal;
        this.fivesTotal = fivesTotal;
        this.sixesTotal = sixesTotal;
        this.threeOfAKind = threeOfAKind;
        this.fourOfAKind = fourOfAKind;
        this.fullHouse = fullHouse;
        this.smallStraight = smallStraight;
        this.largeStraight = largeStraight;
        this.chance = chance;
        this.yahtzee = yahtzee;
    }

    get onesTotal() {
        return this.onesTotal;
    }

    set onesTotal(value) {
        this.onesTotal = value;
    }

    get twosTotal() {
        return this.twosTotal;
    }

    set twosTotal(value) {
        this.twosTotal = value;
    }

    get threesTotal() {
        return this.threesTotal;
    }

    set threesTotal(value) {
        this.threesTotal = value;
    }

    get foursTotal() {
        return this.foursTotal;
    }

    set foursTotal(value) {
        this.foursTotal = value;
    }

    get fivesTotal() {
        return this.fivesTotal;
    }

    set fivesTotal(value) {
        this.fivesTotal = value;
    }

    get sixesTotal() {
        return this.sixesTotal;
    }

    set sixesTotal(value) {
        this.sixesTotal = value;
    }

    get threeOfAKind() {
        return this.threeOfAKind;
    }

    set threeOfAKind(value) {
        this.threeOfAKind = value;
    }

    get fourOfAKind() {
        return this.fourOfAKind;
    }

    set fourOfAKind(value) {
        this.fourOfAKind = value;
    }

    get fullHouse() {
        return this.fullHouse;
    }

    set fullHouse(value) {
        this.fullHouse = value;
    }

    get smallStraight() {
        return this.smallStraight;
    }

    set smallStraight(value) {
        this.smallStraight = value;
    }

    get largeStraight() {
        return this.largeStraight;
    }

    set largeStraight(value) {
        this.largeStraight = value;
    }

    get chance() {
        return this.chance;
    }

    set chance(value) {
        this.chance = value;
    }

    get yahtzee() {
        return this.yahtzee;
    }

    set yahtzee(value) {
        this.yahtzee = value;
    }
}

// Creates the number of players
function CreatePlayers (players) {
    console.log(players);
    for (let i = 0; i < players; i++) {
        let player = new Player();
        console.log(player.name);
    }
}

// Create players class that has scores

