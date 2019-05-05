// behavior modifers displayed on rest view
function buildRestOptionsView(){
  console.log("Building RestOptionsView");

  let step = 18;
  let center = 0;
  let startY = 0;

  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF"};

  let header = new PIXI.BitmapText("inventory and hygiene", labelStyle);
  header.anchor.set(0.5,0.5);
  header.position.set(center, startY);

  let toothbrushes = buildRestOption(step);
  toothbrushes.position.set(header.x + step, header.y + header.height + step + step);

  let toothpaste = buildRestOption(step);
  toothpaste.position.set(toothbrushes.x, toothbrushes.y + toothbrushes.height + step);

  let floss = buildRestOption(step);
  floss.position.set(toothpaste.x, toothpaste.y + toothpaste.height + step);

  let mouthwash = buildRestOption(step);
  mouthwash.position.set(floss.x, floss.y + floss.height + step);

  // container
  let cage = new PIXI.Container();
  cage.addChild(
    header,
    toothbrushes,
    toothpaste,
    floss,
    mouthwash
  )
  cage.toothbrushes = toothbrushes;
  cage.toothpaste = toothpaste;
  cage.floss = floss;
  cage.mouthwash = mouthwash;

  return cage;
}

function buildRestOption(step){
  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "right"};
  let dataStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "left"};
  let center = 0;
  let startY = 0;

  let label = new PIXI.BitmapText("label", labelStyle);
  label.anchor.set(1.0,0.5);
  label.position.set(center, startY);

  let data = new PIXI.BitmapText("data", dataStyle);
  data.anchor.set(0.0,0.5);
  data.position.set(center + 15, label.position.y);

  let consumptionLabel = new PIXI.BitmapText("Daily Use: ", labelStyle);
  consumptionLabel.anchor.set(1.0,0.5);
  consumptionLabel.position.set(center, label.position.y + step);

  let consumptionData = new PIXI.BitmapText("consumptionData", dataStyle);
  consumptionData.anchor.set(0.0,0.5);
  consumptionData.position.set(center + 15, label.position.y + step);

  // modifiers
  let increase = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_up.texture);
  increase.width = increase.height = step * 1.5;
  increase.interactive = true;
  increase.buttonMode = true;
  increase.anchor.set(0.0,0.0);
  increase.position.set(center + step * 3.5, startY);

  let decrease = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_down.texture);
  decrease.width = decrease.height = step * 1.5;
  decrease.interactive = true;
  decrease.buttonMode = true;
  decrease.anchor.set(0.0,0.0);
  decrease.position.set(center + step * 5.5, startY);

  let option = new PIXI.Container();
  option.addChild(
            label,
            data,
            consumptionLabel,
            consumptionData,
            increase,
            decrease
           );
  option.label = label;
  option.data = data;
  option.consumption = consumptionData;
  option.increaseButton = increase;
  option.decreaseButton = decrease;

  return option;
}
