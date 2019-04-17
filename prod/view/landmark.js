// location with type specific menu options and images
function buildLandmarkView(inputLandmark){
  console.log("Building LandmarkView for " + inputLandmark.type);

  // graphic
  let graphic = buildLandmarkGraphic(inputLandmark.graphic);
  graphic.position.set(0, 0); //400x600 image
  graphic.height = app.screen.height;
  graphic.width = app.screen.width/2;
  graphic.pivot.set(0,0); //top left corner

  // info box
  let info = buildLandmarkInfoView(inputLandmark.info);
  info.position.set(app.screen.width/2, app.screen.height/3);
  info.pivot.set(-app.screen.width/4,app.screen.height/6); //right, top

  // actions
  let actions = buildLandmarkActionsView(inputLandmark.type);
  actions.position.set(app.screen.width/2, app.screen.height/3);
  actions.pivot.set(-app.screen.width/4,-app.screen.height/6); //right, bottom

  // container
  let cage = new PIXI.Container();
  cage.addChild(graphic, info, actions);
  cage.actions = actions;

  return cage;
}