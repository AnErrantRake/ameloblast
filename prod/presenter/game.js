// state-dependent functions between view and model

// global var for retaining current party status
var GAME_STATUS = new Status();


function gameLoop(){
  if(GAME_STATUS.isRunning){
    requestAnimationFrame(gameLoop);
    GAME_STATUS.update();
    if(GAME_STATUS.isArrived){
      landmark();
    }
    else if(!GAME_STATUS.location.hasNext()){
      deathSuccess();
    }
    // travel UI
    else if(app.stage.travelView){
      //app.stage.travelView.status.date.text = ;
      //app.stage.travelView.status.environment.text = ;
      // app.stage.travelView.eventView.visible = !app.stage.travelView.eventView.visible;
      app.stage.travelView.status.health.text = GAME_STATUS.getHealthAggregate();
      app.stage.travelView.status.nextLandmark.text = GAME_STATUS.getRemainingDistanceAsString();
    }
  }
}

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
  GAME_STATUS.isRunning = false;
  birth();
}

function travel(){
  console.log("Opening Travel View");
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildTravelView();
  stage.pauseButton.on('pointerdown', rest);
  app.stage.addChild(stage);
  app.stage.travelView = stage;

  GAME_STATUS.isRunning = true;
  gameLoop();
}

function rest(){
  console.log("Opening Rest View");
  GAME_STATUS.isRunning = false;
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildRestView();
  stage.status.health.text = GAME_STATUS.getHealthAggregate();
  stage.status.nextLandmark.text = GAME_STATUS.getRemainingDistanceAsString();

  stage.actions.resumeTravel.on('pointerdown', travel);

  stage.options.toothbrushes.label.text = GAME_STATUS.inventory.toothbrushes.label;
  stage.options.toothbrushes.data.text = GAME_STATUS.inventory.getToothbrushes();
  stage.options.toothbrushes.consumption.text = GAME_STATUS.inventory.getToothbrushesConsumption();
  stage.options.toothpaste.label.text = GAME_STATUS.inventory.toothpaste.label;
  stage.options.toothpaste.data.text = GAME_STATUS.inventory.getToothpaste();
  stage.options.toothpaste.consumption.text = GAME_STATUS.inventory.getToothpasteConsumption();
  stage.options.floss.label.text = GAME_STATUS.inventory.floss.label;
  stage.options.floss.data.text = GAME_STATUS.inventory.getFloss();
  stage.options.floss.consumption.text = GAME_STATUS.inventory.getFlossConsumption();

  stage.options.toothbrushes.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseToothbrushesConsumption();
    stage.options.toothbrushes.consumption.text = GAME_STATUS.inventory.getToothbrushesConsumption();
  });
  stage.options.toothbrushes.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseToothbrushesConsumption();
    stage.options.toothbrushes.consumption.text = GAME_STATUS.inventory.getToothbrushesConsumption();
  });

  stage.options.toothpaste.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseToothpasteConsumption();
    stage.options.toothpaste.consumption.text = GAME_STATUS.inventory.getToothpasteConsumption();
  });
  stage.options.toothpaste.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseToothpasteConsumption();
    stage.options.toothpaste.consumption.text = GAME_STATUS.inventory.getToothpasteConsumption();
  });

  stage.options.floss.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseFlossConsumption();
    stage.options.floss.consumption.text = GAME_STATUS.inventory.getFlossConsumption();
  });
  stage.options.floss.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseFlossConsumption();
    stage.options.floss.consumption.text = GAME_STATUS.inventory.getFlossConsumption();
  });

  app.stage.addChild(stage);
}

function landmark(){
  console.log("Opening Landmark View");
  GAME_STATUS.isRunning = false;
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildLandmarkView(GAME_STATUS.location.nextLandmark);
  stage.actions.resumeTravel.on('pointerdown',function(){
      GAME_STATUS.moveOn();
      travel();
    }
  );
  stage.actions.talk.on('pointerdown',landmarkDialogue);
  app.stage.addChild(stage);
}

function landmarkDialogue(){
  console.log("Opening Landmark Dialogue for " + GAME_STATUS.location.nextLandmark.info.title);
  GAME_STATUS.isRunning = false;
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(GAME_STATUS.location.nextLandmark.notes.journalEntry, landmark, false));
}

function deathFailure(){
  console.log("Beginning failure sequence");
  GAME_STATUS.isRunning = false;
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['death_failure'], reset, false));
}

function deathSuccess(){
  console.log("Beginning success sequence");
  GAME_STATUS.isRunning = false;
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['death_success'], reset, false));
}

// resets the game state before returning to main menu
function reset(){
  GAME_STATUS.isRunning = false;
  status = null;

  mainMenu();
}
