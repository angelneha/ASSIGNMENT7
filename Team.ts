
import { Player } from "./Player";

class Team{
    totalScore:number=0;
    sumScore(player:Player){
    this.totalScore=this.totalScore+player.getRuns()
    }
    displayTotalScore(){
        return this.totalScore;
    }

}


let team=new Team()
let player1=new Player();
player1.hitBall();
let player2=new Player();
player2.hitBall();
let player3=new Player();
player3.hitBall();
let player4=new Player();
player4.hitBall();
let player5=new Player();
player5.hitBall();
let player6=new Player();
player6.hitBall();
let player7=new Player();
player7.hitBall();
let player8=new Player();
player8.hitBall();
let player9=new Player();
player9.hitBall();
let player10=new Player();
player10.hitBall();
let player11=new Player();
player11.hitBall();
let player12=new Player();
player12.hitBall();




 console.log(`player1 Run= ${player1.getRuns()}`);
 console.log(`player2 Run= ${player2.getRuns()}`);
 console.log(`player3 Run= ${player3.getRuns()}`);
 console.log(`player4 Run= ${player4.getRuns()}`);
 console.log(`player5 Run= ${player5.getRuns()}`);
 console.log(`player6 Run= ${player1.getRuns()}`);
 console.log(`player7 Run= ${player2.getRuns()}`);
 console.log(`player8 Run= ${player3.getRuns()}`);
 console.log(`player9 Run= ${player4.getRuns()}`);
 console.log(`player10 Run= ${player5.getRuns()}`);
 console.log(`player11 Run= ${player4.getRuns()}`);
 console.log(`player12 Run= ${player5.getRuns()}`);
 team.sumScore(player1)
 team.sumScore(player2)
 team.sumScore(player3)
 team.sumScore(player4)
 team.sumScore(player5)
 team.sumScore(player6)
 team.sumScore(player7)
 team.sumScore(player8)
 team.sumScore(player9)
 team.sumScore(player10)
 team.sumScore(player11)
 team.sumScore(player12)
console.log(`Total Runs= ${team.displayTotalScore()}`)