// travel view - movement graphic, event and status display
function buildTravelView(){
  console.log("Building TravelView");
  // background
  let background = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_travel_bg.texture);

  // live status
  let status = buildTravelStatusView();

  // pause button

  // text
  let textSprite =
    new PIXI.BitmapText(str_travel['inst_rest'],
      {font: "40px FiveByFive",
       tint: "0xFFFFFF"});
  textSprite.position.set(app.screen.width/2, 388);
  textSprite.anchor.set(0.5,0.35);

  // background
  let txtBG = new PIXI.Sprite(PIXI.Texture.BLACK);
  txtBG.width = textSprite.width;
  txtBG.height = textSprite.height;
  txtBG.position.set(app.screen.width/2, 388);
  txtBG.anchor.set(0.5,0.5);


  // container
  let cage = new PIXI.Container();
  cage.addChild(background, txtBG, textSprite);
  cage.pauseButton = txtBG;
  cage.status = status;

  return cage;
}
