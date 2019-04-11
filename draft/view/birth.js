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

  // text
  let instructions =
    new PIXI.BitmapText(str_story['birth_naming'],
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  instructions.anchor.set(0.5,0.0);
  instructions.position.set(app.screen.width/2,15);

  let playerID =
    new PIXI.BitmapText("You:",
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  playerID.anchor.set(0.0,0.5);
  playerID.position.set(15, app.screen.height/2);

  let playerName =
    new PIXI.BitmapText("",
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  playerName.anchor.set(0.5,0.5);
  playerName.position.set(app.screen.width/2, playerID.position.y);

  let friendID =
    new PIXI.BitmapText("Friend:",
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  friendID.anchor.set(0.0,0.5);
  friendID.position.set(15, app.screen.height/2 + 32);

  let friendName =
    new PIXI.BitmapText("",
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  friendName.anchor.set(0.5,0.5);
  friendName.position.set(app.screen.width/2, friendID.position.y);

  // input handling
  let maxLength = 10;

  let keyObjects = enableInputLogging(playerName, maxLength);

  let enterKey = keyboard("Enter");
  enterKey.press = () => {
    disableInputLogging(keyObjects);
    keyObjects = enableInputLogging(friendName, maxLength);
    enterKey.press = () => {
      disableInputLogging(keyObjects)
      birthSupplies();
    }
  };

  app.stage.addChild(instructions, playerID, playerName, friendID, friendName);
}

function birthSupplies(){
    console.log("Beginning birth supplies");
    // clear the canvas
    app.stage.removeChildren();
}
