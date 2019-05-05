// menu options for rest view
function buildRestActionsView(){
  console.log("Building RestActionsView");

  const itemSize = 18;

  // resume travel
  let resumeTravel = buildMenuOption("resume travel",itemSize);
  resumeTravel.position.y = 15;

  // scavenge
  let scavenge = buildMenuOption("scavenge for a week",itemSize);
  scavenge.position.y = resumeTravel.y + resumeTravel.height + 15;

  // container
  let cage = new PIXI.Container();
  cage.addChild(resumeTravel, scavenge);
  cage.resumeTravel = resumeTravel;
  cage.scavenge = scavenge;

  return cage;
}
