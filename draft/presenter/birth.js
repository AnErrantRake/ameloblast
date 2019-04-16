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
}

function birthIntro(){
  console.log("Beginning birth sequence");
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['birth_intro'], birthNaming, true));
}

function birthNaming(){
  console.log("Beginning birth naming");
  // clear the canvas
  app.stage.removeChildren();

  let nameView = buildNamingView();

  // input handling
  let maxLength = 10;

  let keyObjects = enableInputLogging(nameView.playerName, maxLength);

  let enterKey = keyboard("Enter");
  enterKey.press = () => {
    if(nameView.playerName.text.length > 0){
      disableInputLogging(keyObjects);
      keyObjects = enableInputLogging(nameView.friendName, maxLength);
      enterKey.press = () => {
        if(nameView.friendName.text.length > 0){
          disableInputLogging(keyObjects);
          disableInputLogging([enterKey]);

          GAME_STATUS.playerName = nameView.playerName.text;
          GAME_STATUS.friendName = nameView.friendName.text;
          birthSupplies();
        }
      }
    }
  };

  app.stage.addChild(nameView);
}

function birthSupplies(){
  console.log("Beginning birth supplies");
  // clear the canvas
  app.stage.removeChildren();

  // text
  const instructionsStyle = new PIXI.TextStyle({
    fill: "White",
    align: "center",
    fontFamily: "font_ttf_fivebyfive",
    fontSize: 24,
    wordWrap: true,
    wordWrapWidth: 600
  });

  let instructions = new PIXI.Text(str_story['birth_supplies'],instructionsStyle);
  instructions.anchor.set(0.5,0.0);
  instructions.position.set(app.screen.width/2,15);

  let tradeView = buildTradeView("Click for basic supplies");
  tradeView.dummy.on('pointerdown', travel);

  app.stage.addChild(instructions, tradeView);
}
