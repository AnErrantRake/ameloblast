// large landmark specific image
function buildLandmarkGraphic(landmarkGraphic) {
  console.log("Building LandmarkGraphic");
  // sidebar graphic
  //TODO: set and use the input
  let sidebar = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_landmark_info_placeholder.texture);

  // container
  let cage = new PIXI.Container();
  cage.addChild(sidebar);

  return cage;
}
