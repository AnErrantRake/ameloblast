function buildBirthBehaviorHeader(step){
  console.log("Building BirthBehaviorHeader");

  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "center"};
  let startY = 0;

  // youHeader
  let youLabel = new PIXI.BitmapText("", labelStyle);
  youLabel.anchor.set(0.5,0.5);
  youLabel.position.set(app.screen.width/2, startY);

  let header = new PIXI.Container();
  header.addChild(youLabel);

  return header;
}
