// large landmark specific image
function buildLandmarkGraphic(landmarkGraphic) {
  console.log("Building LandmarkGraphic");
  // sidebar graphic
  let sidebar = new PIXI.Sprite(landmarkGraphic);

  // container
  let cage = new PIXI.Container();
  cage.addChild(sidebar);

  return cage;
}