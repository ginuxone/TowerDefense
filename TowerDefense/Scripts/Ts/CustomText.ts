module TowerDefense {
    export class CustomText extends Phaser.Text {
        text: string;
        game: Phaser.Game;
        constructor(g: Game, x: number, y: number, t: string) {
            super(g, x, y, t, { font: "65px Arial", fill: "#ff0044", align: "center" });
            this.game = g;
            this.text = t;
        }

        create() {
            var textFill = new CustomText(this.game, this.game.world.centerX, this.game.world.centerY, this.text);
            this.game.add.existing(textFill);
        };
    }
}