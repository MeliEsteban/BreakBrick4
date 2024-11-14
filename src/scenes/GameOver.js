import { Scene } from 'phaser';

export class GameOver extends Scene
{
    constructor ()
    {
        super('GameOver');
    }

    init(data){
        //cargar puntaje
        this.finalScore = data.finalScore || 0;
    }

    create ()
    {   
        this.add.image(512, 384, "gameover").setOrigin(0.5);

        this.add.text(512, 430, `Score: ${this.finalScore}`, {
          fontFamily: 'Air Americana DEMO Bold', 
          fontSize: 30,
          color: '#FFC540',
          stroke: '#A87B20', 
          strokeThickness: 4,
          }).setOrigin(0.5);
        }
    }

