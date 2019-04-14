// travel view - movement graphic, event and status display
function buildTravelView(){
  console.log("Building TravelView");
  // background
  let background = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_travel_bg.texture);

  //not showing up
  let pauseButton = buildMenuOption(str_travel['inst_rest'], 40);
  pauseButton.position.set(app.screen.width/2, 388);
  pauseButton.textBox.tint = "0x000000";

  let status = buildTravelStatusView();

  // container
  let cage = new PIXI.Container();
  cage.addChild(background, status, pauseButton);
  cage.pauseButton = pauseButton;
  cage.status = status;

  return cage;
}
