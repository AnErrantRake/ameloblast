var status; //global var for retaining current party status

function mainMenu(){
  console.log("Opening main menu");
  // clear the canvas
  app.stage.removeChildren();

  app.stage.addChild(buildMainMenu());
}

function start(){
  status = new Status();
  birthIntro();
}

function reset(){
  // resets the game state before returning to main menu
  status = null;

  mainMenu();
}

// set view to story dialogue w/ intro message

// set view to naming party

// set view to buy supplies

// set view to story dialogue w/ start journey message

// set view to pause w/ location

// set view to travel w/ location and status

// update view w/ status, location and events each tick

// set view to story dialogue w/ landmark message

// set view to pause w/ location and landmark
