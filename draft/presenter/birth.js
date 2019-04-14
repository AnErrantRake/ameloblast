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

  let instructions =
    new PIXI.BitmapText(str_story['birth_supplies'],
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  instructions.anchor.set(0.5,0.0);
  instructions.position.set(app.screen.width/2,15);

  let tradeView = buildTradeView("Click for basic supplies");
  tradeView.dummy.on('pointerdown', travel);

  app.stage.addChild(instructions, tradeView);
}
