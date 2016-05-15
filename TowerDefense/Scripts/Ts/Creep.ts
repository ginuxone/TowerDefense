module TowerDefense {

    export class Creep extends Phaser.Sprite {

        game: Game;
        hp: number;
        speed: number;
        defense: number;
        regen: number;

        constructor(g: Game, hp?: number,s?:number, d?: number, r?: number) {
            super(g,0,0);
            this.game = g;
            this.hp = hp;
            this.speed = s;
            this.defense = d;
            this.regen = r;
        }

        hit(hit:number) {
            if ((this.hp - hit) < 0)
                this.die();
            else
                this.hp -= hit;
        }

        checkSprite(sprite) {
            try {
                if (sprite.x > this.game.width || sprite.y > this.game.height || sprite.x < 0 || sprite.y < 0 ) {
                    this.die();
                }
            }
            catch (e) {
                console.log(sprite);
            }
        }

        die() {
            this.destroy(true);
        }
        setGame(g: Game) {
            this.game = g;
        }
        setHP(h: number) {
            this.hp = h;
        }
        setSpeed(s:number) {
            this.speed = s;
        }
        setDefense(d:number) {
            this.defense = d;
        }
        setRegen(r:number) {
            this.regen = r;
        }
        getGame() {
            return this.game;
        }
        getHP() {
            return this.hp;
        }
        getSpeed() {
            return this.speed;
        }
        getDefense() {
            return this.defense;
        }
        getRegen() {
            return this.regen;
        }
    }

}
