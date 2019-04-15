// new game builder
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
          console.log(GAME_STATUS);
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
