import "./styles.css";
import images from "Assets/Background.png";

let game;

const gameOptions = {
  playerGravity: 1000,
  playerSpeed: 300,
};

window.onload = function () {
  let gameConfig = {
    type: Phaser.AUTO,
    backgroundColor: "#003300",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      Height: 1000,
    },
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: {
          y: 0,
        },
      },
    },
    
    scene: PlayGame
  }

  game = new Phaser.Game(gameConfig);
  window.focus();
};

class PlayGame extends Phaser.Scene {
  preload() {
    this.load.image("background", images.background);
    this.load.spritesheet("player", "Assets/Legacy-Fantasy - High Forest 2.3/Character/Idle.gif", {frameWidth: 32, frameHeight: 48})
    this.load.image("tiles", "Assets/Legacy-Fantasy - High Forest 2.3/Assets/Tiles.png")
    this.load.image("tree", "src/Assets/Legacy-Fantasy - High Forest 2.3/Trees/Green-Tree.png")
  }

  create() {
    this.treeGroup = this.physics.add.group({
      immovable:true,
      allowGravity: true
    })
    for(let i = 0; i < 20; i++) {
      this.groundGroup.create(Phaser.Math.Between(0, game.config.width),
       Phaser.Math.Between(0, game.config.height), "tree")
    }
  }
}
