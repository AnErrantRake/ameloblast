// text box with title and description from landmark
function buildLandmarkInfoView(landmarkInfo) {
  console.log("Building LandmarkInfoView for " + landmarkInfo.title);

  // text
  const titleStyle = new PIXI.TextStyle({
    fill: "Black",
    align: "center",
    fontFamily: "font_ttf_notepen",
    fontSize: 24,
    wordWrap: true,
    wordWrapWidth: 390
  });

  let title = new PIXI.Text(landmarkInfo.title,titleStyle);
  page1.position.set(0,0);
  title.anchor.set(0.5,0.5);

  const descStyle = new PIXI.TextStyle({
    fill: "Black",
    align: "left",
    fontFamily: "font_ttf_notepen",
    fontSize: 18,
    wordWrap: true,
    wordWrapWidth: 390
  });

  let description = new PIXI.Text(landmarkInfo.description,descStyle);
  description.position.set(0,15);
  title.anchor.set(0.5,0.5);

  // container
  let cage = new PIXI.Container();
  cage.addChild(title, description);

  return cage;
}