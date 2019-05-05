// new game builder
function birth(){
  birthWorld();
  birthIntro();
}

// link landmarks
function birthWorld(){
  console.log("Birthing world");
  GAME_STATUS.location.position = 0;
  GAME_STATUS.location.previousLandmark = LANDMARKS[0];

  // link landmark nodes - constructs the trail
  let currentNode = GAME_STATUS.location.previousLandmark;
  for(let i = 1; i < LANDMARKS.length; i++){
    // link next landmark
    currentNode.location.nextLandmark = LANDMARKS[i];
    // provide link to previous
    currentNode.location.nextLandmark.location.previousLandmark = currentNode;
    // update currentNode for next round
    currentNode = currentNode.location.nextLandmark;
  }
  // update player location
  GAME_STATUS.location.nextLandmark = GAME_STATUS.location.previousLandmark.location.nextLandmark;
  GAME_STATUS.getForecast();

  // update village inventory
  let keys = GAME_STATUS.village.inventory.getKeys();
  for(let i = 0; i < keys.length; i++){
    let value = getRandomInt(GAME_STATUS.village.inventory.maxSize)
      % GAME_STATUS.village.inventory.getSpace();
    GAME_STATUS.village.inventory.setCount(keys[i], value)
  }
}

function birthIntro(){
  console.log("Beginning birth sequence");
  GAME_STATE = 'birth';
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['birth_intro'], birthSupplies, true));
}

function birthSupplies(){
  console.log("Beginning birth supplies");
  // clear the canvas
  app.stage.removeChildren();

  let keys = GAME_STATUS.inventory.getKeys();
  let supplyView = buildBirthSupplies(keys.length);
  supplyView.counter.num.text = GAME_STATUS.inventory.maxSize - GAME_STATUS.inventory.getSpace();
  supplyView.counter.denom.text = GAME_STATUS.inventory.maxSize;
  supplyView.submitButton.visible = ! GAME_STATUS.inventory.spaceRemains();

  for(let i = 0; i < keys.length; i++){
    supplyView.items[i].itemName.text = GAME_STATUS.inventory.getLabel(keys[i]);
    supplyView.items[i].youAmount.text = GAME_STATUS.inventory.getCount(keys[i]);
    supplyView.items[i].villageAmount.text = GAME_STATUS.village.inventory.getCount(keys[i]);

    supplyView.items[i].increaseButton.on('pointerdown', function(){
      exchangeCountItems(GAME_STATUS.village.inventory, GAME_STATUS.inventory, keys[i], 10);
      supplyView.items[i].youAmount.text = GAME_STATUS.inventory.getCount(keys[i]);
      supplyView.items[i].villageAmount.text = GAME_STATUS.village.inventory.getCount(keys[i]);
      supplyView.counter.num.text = GAME_STATUS.inventory.maxSize - GAME_STATUS.inventory.getSpace();
      supplyView.counter.denom.text = GAME_STATUS.inventory.maxSize;
      supplyView.submitButton.visible = ! GAME_STATUS.inventory.spaceRemains();
    });

    supplyView.items[i].decreaseButton.on('pointerdown', function(){
      exchangeCountItems(GAME_STATUS.inventory, GAME_STATUS.village.inventory, keys[i], 10);
      supplyView.items[i].youAmount.text = GAME_STATUS.inventory.getCount(keys[i]);
      supplyView.items[i].villageAmount.text = GAME_STATUS.village.inventory.getCount(keys[i]);
      supplyView.counter.num.text = GAME_STATUS.inventory.maxSize - GAME_STATUS.inventory.getSpace();
      supplyView.counter.denom.text = GAME_STATUS.inventory.maxSize;
      supplyView.submitButton.visible = ! GAME_STATUS.inventory.spaceRemains();
    });

    supplyView.items[i].increase5xButton.on('pointerdown', function(){
      exchangeCountItems(GAME_STATUS.village.inventory, GAME_STATUS.inventory, keys[i], 50);
      supplyView.items[i].youAmount.text = GAME_STATUS.inventory.getCount(keys[i]);
      supplyView.items[i].villageAmount.text = GAME_STATUS.village.inventory.getCount(keys[i]);
      supplyView.counter.num.text = GAME_STATUS.inventory.maxSize - GAME_STATUS.inventory.getSpace();
      supplyView.counter.denom.text = GAME_STATUS.inventory.maxSize;
      supplyView.submitButton.visible = ! GAME_STATUS.inventory.spaceRemains();
    });

    supplyView.items[i].decrease5xButton.on('pointerdown', function(){
      exchangeCountItems(GAME_STATUS.inventory, GAME_STATUS.village.inventory, keys[i], 50);
      supplyView.items[i].youAmount.text = GAME_STATUS.inventory.getCount(keys[i]);
      supplyView.items[i].villageAmount.text = GAME_STATUS.village.inventory.getCount(keys[i]);
      supplyView.counter.num.text = GAME_STATUS.inventory.maxSize - GAME_STATUS.inventory.getSpace();
      supplyView.counter.denom.text = GAME_STATUS.inventory.maxSize;
      supplyView.submitButton.visible = ! GAME_STATUS.inventory.spaceRemains();
    });
  }

  supplyView.submitButton.on('pointerdown', function(){
    birthBehavior();
  });

  app.stage.addChild(supplyView);
}

function birthBehavior(){
  console.log("Beginning birth behavior");
  // clear the canvas
  app.stage.removeChildren();

  let keys = GAME_STATUS.inventory.getKeys();
  let behaviorView = buildBirthBehavior(keys.length);

  for(let i = 0; i < keys.length; i++){
    behaviorView.items[i].itemName.text = GAME_STATUS.inventory.getLabel(keys[i]);
    behaviorView.items[i].action.text = GAME_STATUS.inventory.getActionLabel(keys[i]);
    behaviorView.items[i].consumptionRate.text = GAME_STATUS.inventory.getConsumption(keys[i]);

    behaviorView.items[i].buttons.up.on('pointerdown', function(){
      GAME_STATUS.inventory.increaseConsumption(keys[i]);
      behaviorView.items[i].consumptionRate.text = GAME_STATUS.inventory.getConsumption(keys[i]);
    });

    behaviorView.items[i].buttons.down.on('pointerdown', function(){
      GAME_STATUS.inventory.decreaseConsumption(keys[i]);
      behaviorView.items[i].consumptionRate.text = GAME_STATUS.inventory.getConsumption(keys[i]);
    });
  }

  behaviorView.submitButton.on('pointerdown', function(){
    GAME_STATUS.updateVillageBehavior();
    birthTasking();
  });

  app.stage.addChild(behaviorView);
}

function birthTasking(){
  console.log("Beginning birth tasking");
  // clear the canvas
  app.stage.removeChildren();

  let taskingView = buildDialogueBox(str_story['birth_tasking'], birthJourneyBegins, true);

  app.stage.addChild(taskingView);
}

function birthJourneyBegins(){
  console.log("Beginning Journey");
  // clear the canvas
  app.stage.removeChildren();

  let journeyView = buildBirthJourneyBegins();
  journeyView.button.on('pointerdown', travel);

  app.stage.addChild(journeyView);
}
