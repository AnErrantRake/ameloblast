function buildBirthSuppliesHeader(step, leftBreak, rightBreak, columnOffset){
  console.log("Building BirthSuppliesHeader");

  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "center"};
  let startY = 0;

  // youHeader
  let youLabel = new PIXI.BitmapText("You", labelStyle);
  youLabel.anchor.set(0.5,0.5);
  youLabel.position.set(leftBreak + columnOffset, startY);

  // villageHeader
  let villageLabel = new PIXI.BitmapText("Village", labelStyle);
  villageLabel.anchor.set(0.5, 0.5);
  villageLabel.position.set(rightBreak + columnOffset, startY);

  let header = new PIXI.Container();
  header.addChild(youLabel, villageLabel);

  return header;
}
