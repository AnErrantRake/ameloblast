// text box with title and description from landmark
function buildLandmarkInfoView(landmarkInfo) {
  console.log("Building LandmarkInfoView for " + landmarkInfo.title);

  // text
  const titleStyle = new PIXI.TextStyle({
    fill: "White",
    align: "center",
    fontFamily: "font_ttf_notepen",
    fontSize: 32,
    wordWrap: true,
    wordWrapWidth: app.screen.width - (32 * 2)
  });

  let title = new PIXI.Text(landmarkInfo.title,titleStyle);
  title.position.set(0,0);
  title.anchor.set(0.5,1.0);

  const descStyle = new PIXI.TextStyle({
    fill: "White",
    align: "left",
    fontFamily: "font_ttf_notepen",
    fontSize: 24,
    wordWrap: true,
    wordWrapWidth: app.screen.width - (24 * 2)
  });

  let description = new PIXI.Text(landmarkInfo.description,descStyle);
  description.position.set(0,title.position.y);
  description.anchor.set(0.5,0.0);

  // container
  let cage = new PIXI.Container();
  cage.addChild(title, description);

  return cage;
}
