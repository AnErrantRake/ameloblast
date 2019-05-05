// partial view displaying an event dialogue in the travel view
function buildTravelEventView(){
  console.log("Building TravelEventView");
  // pause button
  let event = buildMenuOption("A default event of about this size", 30);
  event.position.set(0, 0);

  // background for pause button
  let txtBG = new PIXI.Graphics();
  txtBG.beginFill(0x000000);
  let border = 10;
  txtBG.drawRect( event.x - (event.width/2) - border,
                  event.y - (event.height/2) - (border*3),
                  event.width + (border*2),
                  event.height + (border*6)
                );
  txtBG.endFill();

  // container
  let cage = new PIXI.Container();
  cage.addChild(txtBG, event);
  cage.interactive = true;
  cage.buttonMode = true;
  cage.event = event.textBox;

  return cage;
}
