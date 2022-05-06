export class Player{
    runs:number=0;
    hitBall(){
        this.runs=this.runs+Math.floor(Math.random() * 7);
    }


    getRuns(){
        return this.runs;
    }
}
