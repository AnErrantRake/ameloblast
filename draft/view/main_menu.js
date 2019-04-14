// main menu - directory into rest of game

function buildMainMenu(){
  // menu title
  let title =
    new PIXI.BitmapText(str_mainMenu['title'], {font: "48px GENOWN",
     tint: "0xFFFFFF"});
  title.anchor.set(0.5,0.5);
  title.position.set(app.screen.width/2,150);

  // menu options
  let menuItemSize = 32;

  let newGame = buildMenuOption(str_mainMenu['newgame'],menuItemSize);
  newGame.position.set(app.screen.width/2,app.screen.height/2);

  let learn = buildMenuOption(str_mainMenu['learn'],menuItemSize);
  learn.position.set(app.screen.width/2,app.screen.height/2 + (menuItemSize * 1.5));

  // container
  let cage = new PIXI.Container();
  cage.addChild(title, newGame, learn);
  cage.newGame = newGame;
  cage.learn = learn;

  return cage;
}
