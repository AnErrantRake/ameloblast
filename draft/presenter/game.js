// state-dependent functions between view and model

// global var for retaining current party status
var GAME_STATUS = new Status();

function mainMenu(){
  console.log("Opening Main Menu");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildMainMenu();
  stage.newGame.on('pointerdown', start);
  app.stage.addChild(stage);
}

function start(){
  GAME_STATUS = new Status();
  birthIntro();
}

function travel(){
  console.log("Opening Travel View");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildTravelView();
  stage.pauseButton.on('pointerdown', travelUI);
  app.stage.addChild(stage);
  app.stage.travelView = stage;

  app.ticker.start();
  //app.ticker.add(delta => gameLoop(delta));
}

function travelUI(){
  // view isn't updating
  console.log(app.stage.travelView);
  if(app.stage.travelView){
    //app.stage.travelView.status.date.text = ;
    //app.stage.travelView.status.environment.text = ;
    app.stage.travelView.status.health.text = GAME_STATUS.getHealthAggregate();
    app.stage.travelView.status.supplies.text = GAME_STATUS.getSuppliesAggregate();
    app.stage.travelView.status.nextLandmark.text = GAME_STATUS.getRemainingDistanceAsString();
  }
}

function rest(){
  console.log("Opening Rest View");
  app.ticker.stop();

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

  let stage = buildLandmarkView(GAME_STATUS.location.nextLandmark);
  // type-dependent listeners
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
  app.ticker.stop();
  // resets the game state before returning to main menu
  status = null;

  mainMenu();
}
