var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TowerDefense;
(function (TowerDefense) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        function Level1() {
            _super.apply(this, arguments);
        }
        Level1.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'level1');
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new TowerDefense.Player(this.game, 130, 284);
        };
        return Level1;
    }(Phaser.State));
    TowerDefense.Level1 = Level1;
})(TowerDefense || (TowerDefense = {}));
//# sourceMappingURL=Level1.js.map