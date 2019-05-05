// state-dependent functions between view and model

// global var for retaining current party status
var GAME_STATUS = new Status();
var GAME_EVENT = null;
var GAME_STATE = 'none';

// UI and model realtime updates
function gameLoop(){
  if(GAME_STATUS.isAlive){
    requestAnimationFrame(gameLoop);
    if(GAME_STATUS.isMoving){
      GAME_STATUS.move();
    }

    // vitality check
    GAME_STATUS.isAlive = GAME_STATUS.health.isAlive();
    // was alive at start of tick, but now not -> failure
    if(! GAME_STATUS.isAlive){
      deathFailure();
      return;
    }

    if(GAME_STATUS.isArrived){
      landmark();
    }
    else if(!GAME_STATUS.location.hasNext()){
      deathSuccess();
      return;
    }
    // travel UI
    if(app.stage.travelView && GAME_STATE === 'travel'){
      app.stage.travelView.status.date.text = GAME_STATUS.getTimeElapsed();
      app.stage.travelView.status.environment.text = GAME_STATUS.weather.type;
      app.stage.travelView.status.health.text = GAME_STATUS.getHealthAggregate();
      app.stage.travelView.status.supplies.text = GAME_STATUS.getSuppliesAggregate();
      app.stage.travelView.status.nextLandmark.text = GAME_STATUS.getRemainingDistanceAsString();
      if(GAME_EVENT !== null){
        app.stage.travelView.eventView.event.text = GAME_EVENT;
        app.stage.travelView.eventView.visible = true;
        GAME_EVENT = null;
        GAME_STATUS.pause();
      }
    }
    // rest UI
    if(app.stage.restView && GAME_STATE === 'rest'){
      app.stage.restView.status.time.text = GAME_STATUS.getTimeElapsed();
      app.stage.restView.status.environment.text = GAME_STATUS.weather.type;
      app.stage.restView.status.health.text = GAME_STATUS.getHealthAggregate();
      app.stage.restView.status.supplies.text = GAME_STATUS.getSuppliesAggregate();
      app.stage.restView.status.nextLandmark.text = GAME_STATUS.getRemainingDistanceAsString();
      app.stage.restView.options.toothbrushes.data.text = GAME_STATUS.inventory.getCount('toothbrushes');
      app.stage.restView.options.toothpaste.data.text = GAME_STATUS.inventory.getCount('toothpaste');
      app.stage.restView.options.floss.data.text = GAME_STATUS.inventory.getCount('floss');
      app.stage.restView.options.mouthwash.data.text = GAME_STATUS.inventory.getCount('mouthwash');
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
  GAME_STATUS.isMoving = false;
  birth();
}

function travel(){
  console.log("Opening Travel View");
  GAME_STATE = 'travel';
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildTravelView(GAME_STATUS.isEnroute);
  stage.pauseButton.on('pointerdown', rest);
  app.stage.addChild(stage);
  app.stage.travelView = stage;
  stage.eventView.on('pointerdown',function(){
    stage.eventView.visible = false;
    GAME_STATUS.resume();
  });

  GAME_STATUS.isMoving = true;
  gameLoop();
}

function rest(){
  console.log("Opening Rest View");
  GAME_STATE = 'rest';
  GAME_STATUS.isMoving = false;
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildRestView();

  stage.actions.resumeTravel.on('pointerdown', travel);
  stage.actions.scavenge.on('pointerdown', function(){GAME_STATUS.scavenge();});

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

  stage.options.mouthwash.label.text = GAME_STATUS.inventory.getLabel('mouthwash');
  stage.options.mouthwash.data.text = GAME_STATUS.inventory.getCount('mouthwash');
  stage.options.mouthwash.consumption.text = GAME_STATUS.inventory.getConsumption('mouthwash');
  stage.options.mouthwash.increaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.increaseConsumption('mouthwash');
    stage.options.mouthwash.consumption.text = GAME_STATUS.inventory.getConsumption('mouthwash');
  });
  stage.options.mouthwash.decreaseButton.on('pointerdown', function(){
    GAME_STATUS.inventory.decreaseConsumption('mouthwash');
    stage.options.mouthwash.consumption.text = GAME_STATUS.inventory.getConsumption('mouthwash');
  });

  app.stage.addChild(stage);
  app.stage.restView = stage;
}

function landmark(){
  console.log("Opening Landmark View");
  GAME_STATE = 'landmark';
  GAME_STATUS.isMoving = false;
  GAME_STATUS.isArrived = false;
  // clear the canvas
  app.stage.removeChildren();

  // test for endgame - just drop out, let the update pick up the view
  if(GAME_STATUS.location.nextLandmark.type === "endgame"){
    GAME_STATUS.moveOn();
    return;
  }

  let stage = buildLandmarkView(GAME_STATUS.location.nextLandmark);
  if(GAME_STATUS.location.nextLandmark.hasBeenRead){
    stage.actions.resumeTravel.visible = true;
    stage.actions.resumeTravel.on('pointerdown',function(){
        GAME_STATUS.moveOn();
        travel();
      }
    );
  }
  stage.actions.talk.on('pointerdown',landmarkDialogue);
  app.stage.addChild(stage);
}

function landmarkDialogue(){
  console.log("Opening Landmark Dialogue for " + GAME_STATUS.location.nextLandmark.info.title);
  GAME_STATE = 'landmarkDialogue';
  GAME_STATUS.isRunning = false;
  // clear the canvas
  app.stage.removeChildren();

  let stage = buildDialogueBox(GAME_STATUS.location.nextLandmark.getNotes(),
  function() {
    disableInputLogging(citationKey);
    landmark();
  }, false);

  // text
  const citationStyle = new PIXI.TextStyle({
    fill: "White",
    align: "left",
    fontFamily: "Arial",
    fontSize: 12,
    wordWrap: true,
    wordWrapWidth: 280
  });
  let citation = new PIXI.Text("placeholdertext", citationStyle);
  citation.anchor.set(1.0);
  citation.position.set(app.screen.width - 10,app.screen.height - 10);
  citation.visible = false;

  let citationKey = keyboard(" ");
  citationKey.press = () => {
    citation.visible = ! citation.visible;
  };
  citation.text = formatCitation(GAME_STATUS.location.nextLandmark.getCitation());
  app.stage.addChild(stage, citation);
}

// resets the game state before returning to main menu
function reset(){
  GAME_STATUS.isRunning = false;
  status = null;

  mainMenu();
}
