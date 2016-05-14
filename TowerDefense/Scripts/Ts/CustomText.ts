module TowerDefense {
    export class CustomText extends Phaser.Text {
        
        constructor(g: Game, x: number, y: number, t: string, a: number) {
            super(g, x, y, t, {});
            this.setStyle(this.getStyle(a));
        }

        getStyle(a: number) {
            var style;
            switch (a) {
                case 0:
                    style = { font: "50px Arial", fill: "#ff1124", align: "center" };
                    break;
                case 1:
                    style = { font: "45px Arial", fill: "#ff0044", align: "center" };
                    break;
                case 2:
                    style = { font: "35px Arial", fill: "#ff0044", align: "center" };
                    break;
                case 3:
                    style = { font: "25px Arial", fill: "#ff0044", align: "center" };
                    break;
                default:
                    style = { font: "15px Arial", fill: "#ff0044", align: "center" };
                    break;
            }
            return style;
        }

    }
}