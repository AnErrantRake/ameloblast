var state = new_game;

function new_game(delta){
    let stateName =
      new PIXI.BitmapText("new game", {font: "48px GENOWN_white"});
    stateName.anchor.set(0.5,0.5);
    stateName.position.set(app.screen.width/2,150);

    app.stage.addChild(stateName);
    setTimeout(function(){app.stage.removeChildren(); state = end_game},5000)
}

function end_game(delta){
    let stateName =
      new PIXI.BitmapText("end game", {font: "48px GENOWN_white"});
    stateName.anchor.set(0.5,0.5);
    stateName.position.set(app.screen.width/2,150);

    app.stage.addChild(stateName);
}
