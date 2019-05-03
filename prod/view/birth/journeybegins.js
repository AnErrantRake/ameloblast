function buildBirthJourneyBegins(){
  console.log("Building BirthJourneyView");

  // text
  let textSprite =
    new PIXI.BitmapText("BEGIN JOURNEY",
      {font: "48px FiveByFive",
       tint: "0xFFFFFF"});
  textSprite.anchor.set(0.5,0.5);
  textSprite.position.set(0, 0);

  // background for clicking
  let txtBG = new PIXI.Sprite(PIXI.Texture.BLACK);
  txtBG.width = textSprite.width;
  txtBG.height = textSprite.height;
  txtBG.anchor.set(0.5,0.5);
  txtBG.position.set(textSprite.x, textSprite.y);

  // container
  let button = new PIXI.Container();
  button.addChild(txtBG,textSprite);
  button.interactive = true;
  button.buttonMode = true;
  button.position.set(app.screen.width/2, app.screen.height/5);

  // ameloblast
  const ameloblast = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_amelo_mid.texture);
  ameloblast.anchor.set(0.0, 0.0);
  ameloblast.position.set(0, button.y);

  let cage = new PIXI.Container();
  cage.addChild(button, ameloblast);
  cage.button = button;
  cage.ameloblast = ameloblast;

  return cage;
}
