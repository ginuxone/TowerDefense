module TowerDefense {
    export class Level1 extends Level {

        create() {

            this.SetBackgroundMap("level1Map");

            this.AddTitle("Level1");

            this.SetCreep("Level1Creep");

            this.creep.SetPath();
            
            //this.music = this.add.audio('music', 1, false);
            //this.music.play();

            //this.player = new Player(this.game, 130, 284);

        }

    }
}