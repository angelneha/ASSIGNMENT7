"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var Team = /** @class */ (function () {
    function Team() {
        this.totalScore = 0;
    }
    Team.prototype.sumScore = function (player) {
        this.totalScore = this.totalScore + player.getRuns();
    };
    Team.prototype.displayTotalScore = function () {
        return this.totalScore;
    };
    return Team;
}());
var team = new Team();
var player1 = new Player_1.Player();
player1.hitBall();
var player2 = new Player_1.Player();
player2.hitBall();
var player3 = new Player_1.Player();
player3.hitBall();
var player4 = new Player_1.Player();
player4.hitBall();
var player5 = new Player_1.Player();
player5.hitBall();
var player6 = new Player_1.Player();
player6.hitBall();
var player7 = new Player_1.Player();
player7.hitBall();
var player8 = new Player_1.Player();
player8.hitBall();
var player9 = new Player_1.Player();
player9.hitBall();
var player10 = new Player_1.Player();
player10.hitBall();
var player11 = new Player_1.Player();
player11.hitBall();
var player12 = new Player_1.Player();
player12.hitBall();
console.log("player1 Run= ".concat(player1.getRuns()));
console.log("player2 Run= ".concat(player2.getRuns()));
console.log("player3 Run= ".concat(player3.getRuns()));
console.log("player4 Run= ".concat(player4.getRuns()));
console.log("player5 Run= ".concat(player5.getRuns()));
console.log("player6 Run= ".concat(player1.getRuns()));
console.log("player7 Run= ".concat(player2.getRuns()));
console.log("player8 Run= ".concat(player3.getRuns()));
console.log("player9 Run= ".concat(player4.getRuns()));
console.log("player10 Run= ".concat(player5.getRuns()));
console.log("player11 Run= ".concat(player4.getRuns()));
console.log("player12 Run= ".concat(player5.getRuns()));
team.sumScore(player1);
team.sumScore(player2);
team.sumScore(player3);
team.sumScore(player4);
team.sumScore(player5);
team.sumScore(player6);
team.sumScore(player7);
team.sumScore(player8);
team.sumScore(player9);
team.sumScore(player10);
team.sumScore(player11);
team.sumScore(player12);
console.log("Total Runs= ".concat(team.displayTotalScore()));
