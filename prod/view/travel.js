// travel view - movement graphic, event and status display
function buildTravelView(enroute){
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
  if(enroute){
    // right side, driving left
    ameloblast.height = 150;
    ameloblast.width = 300;
    ameloblast.anchor.set(1.0, 0.0);
    ameloblast.position.set(app.screen.width, 100);
  }
  else {
    // left side, driving right
    ameloblast.height = 150;
    ameloblast.width = -300;
    ameloblast.anchor.set(1.0, 0.0);
    ameloblast.position.set(0, 100);
  }
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
  cage.addChild(background,
                ameloblast,
                event,
                txtBG,
                status,
                pauseButton
              );
  cage.pauseButton = pauseButton;
  cage.vehicle = ameloblast;
  cage.eventView = event;
  cage.status = status;

  return cage;
}
