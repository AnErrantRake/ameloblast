// menu options for rest view
function buildRestActionsView(){
  console.log("Building RestActionsView");

  const itemSize = 18;

  // resume travel
  let resumeTravel = buildMenuOption("resume",itemSize);
  resumeTravel.position.y = 15;

  // wait
  let wait = buildMenuOption("wait",itemSize);
  wait.position.y = 35;

  // container
  let cage = new PIXI.Container();
  cage.addChild(resumeTravel, wait);
  cage.resumeTravel = resumeTravel;
  cage.wait = wait;

  return cage;
}
