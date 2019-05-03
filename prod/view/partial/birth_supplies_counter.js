function buildBirthSuppliesCounter(step){
  console.log("Building BirthSuppliesCounter");

  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "right"};
  let startY = 0;
  let startX = 0;

  // space
  let label = new PIXI.BitmapText("Space: ", labelStyle);
  label.anchor.set(0.0, 1.0);
  label.position.set(startX, startY);

  // break
  let spacer = new PIXI.BitmapText("/", labelStyle);
  spacer.anchor.set(0.5, 1.0);
  spacer.position.set(label.x + label.width + (step*3), startY);

  // numerator
  let numerator = new PIXI.BitmapText("###", labelStyle);
  numerator.anchor.set(1.0, 1.0);
  numerator.position.set(spacer.x - spacer.width, startY);

  // denominator
  let denominator = new PIXI.BitmapText("###", labelStyle);
  denominator.anchor.set(0.0, 1.0);
  denominator.position.set(spacer.x + spacer.width, startY);


  let counter = new PIXI.Container();
  counter.addChild(label, numerator, spacer, denominator);
  counter.num = numerator;
  counter.denom = denominator;

  return counter;
}
