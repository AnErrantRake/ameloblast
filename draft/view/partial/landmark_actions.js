// menu options for landmark view
function buildLandmarkActionsView(landmarkType){
  console.log("Building LandmarkActionsView");

  const itemSize = 18;
  const startY = 15;
  const step = 20;

  this.actions = ["resume travel", "talk to the man", "look around"]; //etc, type dependent TODO:don't store here

  if(landmarkType == "info"){
  // resume travel
  let resumeTravel = buildMenuOption(actions[0],itemSize);
  resumeTravel.position.y = startY;

  // talk
  let talk = buildMenuOption(actions[1],itemSize);
  talk.position.y = startY + (1 * step);

  // explore
  let explore = buildMenuOption(actions[2],itemSize);
  explore.position.y = startY + (2 * step);

  // container
  let cage = new PIXI.Container();
  cage.addChild(resumeTravel, talk, explore);
  cage.resumeTravel = resumeTravel;
  cage.talk = talk;
  cage.explore = explore;
  }

  return cage;
}
