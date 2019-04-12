// naming - player input for names

function buildNamingView(){
  console.log("Building NamingView");
  // text
  let instructions =
    new PIXI.BitmapText(str_story['birth_naming'],
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  instructions.anchor.set(0.5,0.0);
  instructions.position.set(app.screen.width/2,15);

  let style = {font: "32px FiveByFive", tint: "0xFFFFFF"};

  let playerID =
    new PIXI.BitmapText("You:", style);
  playerID.anchor.set(0.0,0.5);
  playerID.position.set(15, app.screen.height/2);

  let playerName =
    new PIXI.BitmapText("", style);
  playerName.anchor.set(0.5,0.5);
  playerName.position.set(app.screen.width/2, playerID.position.y);

  let friendID =
    new PIXI.BitmapText("Friend:", style);
  friendID.anchor.set(0.0,0.5);
  friendID.position.set(15, app.screen.height/2 + 32);

  let friendName =
    new PIXI.BitmapText("", style);
  friendName.anchor.set(0.5,0.5);
  friendName.position.set(app.screen.width/2, friendID.position.y);

  // container
  let cage = new PIXI.Container();
  cage.addChild(instructions, playerID, playerName, friendID, friendName);
  cage.playerName = playerName;
  cage.friendName = friendName;

  return cage;
}
