// clickable background with configurable text
function buildMenuOption (label, size) {
    console.log("Building MenuOption for " + label);

    // text
    let textSprite =
      new PIXI.BitmapText(label,
        {font: size + "px FiveByFive",
         tint: "0xFFFFFF"});
    textSprite.anchor.set(0.5,0.35);

    // background
    let txtBG = new PIXI.Sprite(PIXI.Texture.BLACK);
    txtBG.width = textSprite.width;
    txtBG.height = textSprite.height;
    txtBG.anchor.set(0.5,0.5);

    // container
    let cage = new PIXI.Container();
    cage.addChild(txtBG,textSprite);
    cage.interactive = true;
    cage.buttonMode = true;

    return cage;
}
