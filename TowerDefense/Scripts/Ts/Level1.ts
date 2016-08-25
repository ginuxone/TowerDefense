module TowerDefense {
    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: TowerDefense.Player;

        create() {

            this.background = this.add.sprite(100, 0, 'level1Map');

            var c = new CustomText(this.game, this.world.centerX, 0, "Level1");
            this.game.add.existing(c);

            //this.music = this.add.audio('music', 1, false);
            //this.music.play();

            //this.player = new Player(this.game, 130, 284);

        }
    }
}