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

  stage.options.toothbrushes.label.text = GAME_STATUS.inventory.getLabel('toothbrushes');
  stage.options.toothbrushes.data.text = GAME_STATUS.inventory.getCount('toothbrushes');
  stage.options.toothbrushes.consumption.text = GAME_STATUS.inventory.getConsumption('toothbrushes');
  stage.options.toothbrushes.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseConsumption('toothbrushes');
    stage.options.toothbrushes.consumption.text = GAME_STATUS.inventory.getConsumption('toothbrushes');
  });
  stage.options.toothbrushes.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseConsumption('toothbrushes');
    stage.options.toothbrushes.consumption.text = GAME_STATUS.inventory.getConsumption('toothbrushes');
  });


  stage.options.toothpaste.label.text = GAME_STATUS.inventory.getLabel('toothpaste');
  stage.options.toothpaste.data.text = GAME_STATUS.inventory.getCount('toothpaste');
  stage.options.toothpaste.consumption.text = GAME_STATUS.inventory.getConsumption('toothpaste');
  stage.options.toothpaste.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseConsumption('toothpaste');
    stage.options.toothpaste.consumption.text = GAME_STATUS.inventory.getConsumption('toothpaste');
  });
  stage.options.toothpaste.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseConsumption('toothpaste');
    stage.options.toothpaste.consumption.text = GAME_STATUS.inventory.getConsumption('toothpaste');
  });

  stage.options.floss.label.text = GAME_STATUS.inventory.getLabel('floss');
  stage.options.floss.data.text = GAME_STATUS.inventory.getCount('floss');
  stage.options.floss.consumption.text = GAME_STATUS.inventory.getConsumption('floss');
  stage.options.floss.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseConsumption('floss');
    stage.options.floss.consumption.text = GAME_STATUS.inventory.getConsumption('floss');
  });
  stage.options.floss.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseConsumption('floss');
    stage.options.floss.consumption.text = GAME_STATUS.inventory.getConsumption('floss');
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

// resets the game state before returning to main menu
function reset(){
  GAME_STATUS.isRunning = false;
  status = null;

  mainMenu();
}
