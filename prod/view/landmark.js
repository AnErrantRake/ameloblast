// location with type specific menu options and images
function buildLandmarkView(inputLandmark){
  console.log("Building LandmarkView for " + inputLandmark.type);

  // info box
  let info = buildLandmarkInfoView(inputLandmark.info);
  info.position.set(app.screen.width/2, app.screen.height/3);

  // actions
  let actions = buildLandmarkActionsView(inputLandmark.type);
  actions.position.set(app.screen.width/2, info.y + info.height + actions.height);

  // container
  let cage = new PIXI.Container();
  cage.addChild(info, actions);
  cage.actions = actions;

  return cage;
}
