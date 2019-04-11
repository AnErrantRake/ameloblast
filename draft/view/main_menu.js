// main menu - directory into rest of game

function mainMenu(){
  console.log("Building main menu");
  // clear the canvas
  app.stage.removeChildren();

  // menu title
  let title =
    new PIXI.BitmapText(str_mainMenu['title'], {font: "48px GENOWN",
     tint: "0xFFFFFF"});
  title.anchor.set(0.5,0.5);
  title.position.set(app.screen.width/2,150);

  app.stage.addChild(title);

  // menu options
  let menuItemSize = 32;

  let newgame = buildMenuOption(str_mainMenu['newgame'],menuItemSize);
  newgame.position.set(app.screen.width/2,app.screen.height/2);
  newgame.on('pointerdown', start);
  app.stage.addChild(newgame);

  let learn = buildMenuOption(str_mainMenu['learn'],menuItemSize);
  learn.position.set(app.screen.width/2,app.screen.height/2 + (menuItemSize * 1.5));
  app.stage.addChild(learn);
}
