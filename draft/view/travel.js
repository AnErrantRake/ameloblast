// travel view - movement graphic, event and status display
function buildTravelView(){
  console.log("Building TravelView");
  // background
  let background = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_travel_bg.texture);

  // ameloblast
  const textures = [
                    PIXI.Loader.shared.resources.texture_amelo_mid.texture,
                    PIXI.Loader.shared.resources.texture_amelo_left.texture,
                    PIXI.Loader.shared.resources.texture_amelo_mid.texture,
                    PIXI.Loader.shared.resources.texture_amelo_right.texture
                   ]
  const ameloblast = new PIXI.AnimatedSprite(textures);
  ameloblast.animationSpeed = (2/60); //2 frames per second
  ameloblast.position.set(600, 100);
  ameloblast.height = 150;
  ameloblast.width = 300;
  ameloblast.play();

  // event view
  let event = buildTravelEventView();
  event.position.set(app.screen.width/2, 260);
  event.visible = false;

  // live status
  let status = buildTravelStatusView();

  // pause button
  let pauseButton = buildMenuOption(str_travel['inst_rest'], 40);
  pauseButton.position.set(app.screen.width/2, 380);

  // background for pause button
  let txtBG = new PIXI.Graphics();
  txtBG.beginFill(0x000000);
  let border = 5;
  txtBG.drawRect( pauseButton.x - (pauseButton.width/2) - border,
                  pauseButton.y - (pauseButton.height/2) - border,
                  pauseButton.width + (border*2),
                  pauseButton.height + (border*2)
                );
  txtBG.endFill();

  // container
  let cage = new PIXI.Container();
  cage.addChild(background, ameloblast, event, txtBG, status, pauseButton);
  cage.pauseButton = pauseButton;
  cage.vehicle = ameloblast;
  cage.eventView = event;
  cage.status = status;

  return cage;
}
