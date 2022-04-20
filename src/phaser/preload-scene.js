import Phaser from "phaser";

class PreloadScene extends Phaser.Scene {
  constructor() {
    super("PreloadScene");
  }

  preload() {
    this.load.bitmapFont(
      "carrier_command",
      "assets/fonts/carrier_command.png",
      "assets/fonts/carrier_command.xml"
    );
    this.load.image("title_background", "assets/images/title_background.jpg");

    this.load.image("ground", "assets/images/ground.png");
    this.load.image("dino-idle", "assets/images/dino-idle.png");
    this.load.image("dino-hurt", "assets/images/dino-hurt.png");
    this.load.image("restart", "assets/images/restart.png");
    this.load.image("game-over", "assets/images/game-over.png");
    this.load.image("cloud", "assets/images/cloud.png");

    this.load.spritesheet("star", "assets/images/stars.png", {
      frameWidth: 9,
      frameHeight: 9,
    });

    this.load.spritesheet("moon", "assets/images/moon.png", {
      frameWidth: 20,
      frameHeight: 40,
    });

    this.load.spritesheet("dino", "assets/images/dino-run.png", {
      frameWidth: 88,
      frameHeight: 94,
    });

    this.load.spritesheet("dino-down", "assets/images/dino-down.png", {
      frameWidth: 118,
      frameHeight: 94,
    });

    this.load.spritesheet("enemy-bird", "assets/images/enemy-bird.png", {
      frameWidth: 92,
      frameHeight: 77,
    });

    this.load.spritesheet("fullscreen", "assets/images/fullscreen.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.image("obsticle-0", "assets/images/litecoin.png");
    this.load.image("obsticle-1", "assets/images/usdcoin.png");
    this.load.image("obsticle-2", "assets/images/tethererc20.png");
    this.load.image("obsticle-3", "assets/images/litecoin.png");
    this.load.image("obsticle-4", "assets/images/ethereum.png");
    this.load.image("obsticle-5", "assets/images/bitcoin.png");
    this.load.image("obsticle-6", "assets/images/tether.png");

    this.load.audio("jump", "assets/sounds/jump.m4a");
    this.load.audio("hit", "assets/sounds/hit.m4a");
    this.load.audio("reach", "assets/sounds/reach.m4a");
  }

  create() {
    this.scene.start("TitleScene");
  }
}

export default PreloadScene;
