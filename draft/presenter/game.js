// state-dependent functions between view and model

var status; //global var for retaining current party status

function mainMenu(){
  console.log("Opening main menu");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildMainMenu();
  stage.newGame.on('pointerdown', start);
  app.stage.addChild(stage);
}

function start(){
  status = new Status();
  birthIntro();
}

function travel(){
  console.log("Opening Travel View");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildTravelView();
  stage.pauseButton.on('pointerdown', rest);
  app.stage.addChild(stage);

}

function rest(){
  console.log("Opening Rest View");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildRestView();
  stage.actions.resumeTravel.on('pointerdown', travel);
  app.stage.addChild(stage);
}

function landmark(){
  console.log("Opening Landmark View");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildLandmarkView(status.location.nextLandmark);
  // type-dependent listeners
//  stage.actions.resumeTravel.on('pointerdown', travel);
  app.stage.addChild(stage);
}

function deathFailure(){
  console.log("Beginning failure sequence");
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['death_failure'], reset, false));
}

function deathSuccess(){
  console.log("Beginning success sequence");
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['death_success'], reset, false));
}

function reset(){
  // resets the game state before returning to main menu
  status = null;

  mainMenu();
}
