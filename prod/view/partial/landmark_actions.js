// menu options for landmark view
function buildLandmarkActionsView(landmarkType){
  console.log("Building LandmarkActionsView");

  const itemSize = 18;
  const startY = 15;
  const step = 20;

  this.actions = ["resume travel", "read the scholar's notes"]; //etc, type dependent TODO:don't store here

  // resume travel
  let resumeTravel = buildMenuOption(actions[0],itemSize);
  resumeTravel.position.y = startY;
  resumeTravel.visible = false;

  // talk
  let talk = buildMenuOption(actions[1],itemSize);
  talk.position.y = startY + (1 * step);

  // container
  let cage = new PIXI.Container();
  cage.addChild(resumeTravel, talk);
  cage.resumeTravel = resumeTravel;
  cage.talk = talk;

  return cage;
}
