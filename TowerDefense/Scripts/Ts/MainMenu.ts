module TowerDefense {
    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;
        
        create() {

            this.background = this.add.sprite(0, 0, 'MainMenuImg');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            var group = this.add.group();

            this.input.onDown.addOnce(this.fadeOut, this);
            this.addText();

        }

        fadeOut() {

            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);

        }

        startGame() {

            this.game.state.start('Level1', true, false);

        }
        addText() {
            var c = new CustomText(this.game, this.world.centerX, 0, "Main Menu",0);
            this.game.add.existing(c);

        }

        //function removeGroup() {
        //    this.world.remove(group);
        //    // group.destroy();
        //}

    //    function over() {
    //        console.log('button over');
    //    }

    //    function out() {
    //        console.log('button out');
    //    }

    //    function actionOnClick() {

    //        console.log('button clicked');

    //}

    }

}