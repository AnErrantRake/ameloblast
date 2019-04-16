// clickable background with configurable text
// derived from jonforum on http://www.html5gamedevs.com/topic/37055-pixitext-with-solid-color-background/
function buildMenuOption (label, size) {
  console.log("Building MenuOption for " + label);

  // text
  let textSprite =
    new PIXI.BitmapText(label,
      {font: size + "px FiveByFive",
       tint: "0xFFFFFF"});
  textSprite.anchor.set(0.5,0.35);

  // background for clicking
  let txtBG = new PIXI.Sprite(PIXI.Texture.BLACK);
  txtBG.width = textSprite.width;
  txtBG.height = textSprite.height;
  txtBG.anchor.set(0.5,0.5);

  // container
  let cage = new PIXI.Container();
  cage.addChild(txtBG,textSprite);
  cage.interactive = true;
  cage.buttonMode = true;
  cage.textBox = textSprite;

  return cage;
}
