"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
        this.runs = 0;
    }
    Player.prototype.hitBall = function () {
        this.runs = this.runs + Math.floor(Math.random() * 7);
    };
    Player.prototype.getRuns = function () {
        return this.runs;
    };
    return Player;
}());
exports.Player = Player;
