
function deathFailure(){
  console.log("Beginning failure sequence");
  GAME_STATE = 'death';
  GAME_STATUS.isAlive = false;
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['death_failure'], reset, false));
}

function deathSuccess(){
  console.log("Beginning success sequence");
  GAME_STATE = 'death';
  GAME_STATUS.isAlive = false;
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildDialogueBox(str_story['death_success'], reset, false));
}
