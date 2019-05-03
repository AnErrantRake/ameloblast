// behavior modifers displayed on rest view
function buildRestOptionsView(){
  console.log("Building RestOptionsView");

  let step = 18;
  let center = 0;
  let startY = 0;
  let itemCount = 3;

  let toothbrushes = buildRestOption(step);
  toothbrushes.position.set(center, startY + (itemCount*step));

  let toothpaste = buildRestOption(step);
  toothpaste.position.set(toothbrushes.position.x, toothbrushes.position.y + (itemCount*step));

  let floss = buildRestOption(step);
  floss.position.set(toothpaste.position.x, toothpaste.position.y + (itemCount*step));

  // container
  let cage = new PIXI.Container();
  cage.addChild(
    toothbrushes,
    toothpaste,
    floss
  )
  cage.toothbrushes = toothbrushes;
  cage.toothpaste = toothpaste;
  cage.floss = floss;

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
  increase.width = increase.height = step - 4;
  increase.interactive = true;
  increase.buttonMode = true;
  increase.anchor.set(0.0,0.8);
  increase.position.set(center + step, consumptionLabel.position.y + step);

  let decrease = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_down.texture);
  decrease.width = decrease.height = step - 4;
  decrease.interactive = true;
  decrease.buttonMode = true;
  decrease.anchor.set(0.0,0.8);
  decrease.position.set(decrease.position.x + (3*step), consumptionLabel.position.y + step);

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
