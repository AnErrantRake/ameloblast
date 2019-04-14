// status overview for inactive travel i.e. rest
function buildRestActionsView(){
  console.log("Building RestActionsView");

  const itemSize = 18;
  // resume travel

  let resumeTravel = buildMenuOption("resume",itemSize);

  // wait

  let wait = buildMenuOption("wait",itemSize);

  // container
  let cage = new PIXI.Container();
  cage.addChild(resumeTravel, wait);
  cage.resumeTravel = resumeTravel;
  cage.wait = wait;

  return cage;
}
