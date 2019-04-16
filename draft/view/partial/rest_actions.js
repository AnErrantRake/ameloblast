// menu options for rest view
function buildRestActionsView(){
  console.log("Building RestActionsView");

  const itemSize = 18;

  // resume travel
  let resumeTravel = buildMenuOption("resume travel",itemSize);
  resumeTravel.position.y = 15;

  // container
  let cage = new PIXI.Container();
  cage.addChild(resumeTravel);
  cage.resumeTravel = resumeTravel;

  return cage;
}
