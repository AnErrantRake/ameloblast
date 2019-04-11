// end of game - success or failure
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
