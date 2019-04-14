// travel view - movement graphic, event and status display
function buildTravelView(){
  console.log("Building TravelView");
  // background
  let background = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_travel_bg.texture);

  // live status
  let status = buildTravelStatusView();

  // pause button
  let pauseButton = buildMenuOption(str_travel['inst_rest'], 40);
  pauseButton.position.set(app.screen.width/2, 380);

  // background
  let txtBG = new PIXI.Graphics();
  // Rectangle
  txtBG.beginFill(0x000000);
  let border = 15;
  txtBG.drawRect( pauseButton.x - (pauseButton.width/2) - border,
                  pauseButton.y - (pauseButton.height/2) - border,
                  pauseButton.width + border,
                  pauseButton.height + border
                );
  txtBG.endFill();

  // container
  let cage = new PIXI.Container();
  cage.addChild(background, txtBG, status, pauseButton);
  cage.pauseButton = pauseButton;
  cage.status = status;

  return cage;
}
