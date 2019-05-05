function buildBirthSuppliesItem(step, leftBreak, rightBreak, columnOffset){
  console.log("Building BirthSuppliesItem");

  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "center"};
  let dataStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "center"};
  let startY = 0;

  // item name - left of left break
  let itemName = new PIXI.BitmapText("itemnameplaceholder", labelStyle);
  itemName.anchor.set(1.0,0.5);
  itemName.position.set(leftBreak, startY);

  // your amount - centered
  let youAmount = new PIXI.BitmapText("####", dataStyle);
  youAmount.anchor.set(0.5, 0.5);
  youAmount.position.set(leftBreak + columnOffset, startY);

  // button left - right of left break
  let increase = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_up.texture);
  increase.width = increase.height = step;
  increase.interactive = true;
  increase.buttonMode = true;
  increase.anchor.set(0.5,0.5);
  increase.position.set(youAmount.x - (step * 4.5), startY);

  // button right - left of right break
  let decrease = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_down.texture);
  decrease.width = decrease.height = step;
  decrease.interactive = true;
  decrease.buttonMode = true;
  decrease.anchor.set(0.5,0.5);
  decrease.position.set(youAmount.x + (step * 4.5), startY);

  // button left - right of left break
  let increase5x = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_up.texture);
  increase5x.width = increase5x.height = step * 1.5;
  increase5x.interactive = true;
  increase5x.buttonMode = true;
  increase5x.anchor.set(0.5,0.5);
  increase5x.position.set(youAmount.x - (step * 3), startY);

  // button right - left of right break
  let decrease5x = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_down.texture);
  decrease5x.width = decrease5x.height = step * 1.5;
  decrease5x.interactive = true;
  decrease5x.buttonMode = true;
  decrease5x.anchor.set(0.5,0.5);
  decrease5x.position.set(youAmount.x + (step * 3), startY);

  // village amount - centered
  let villageAmount = new PIXI.BitmapText("####", dataStyle);
  villageAmount.anchor.set(0.5, 0.5);
  villageAmount.position.set(rightBreak + columnOffset, startY);

  // modifiers
  let item = new PIXI.Container();
  item.addChild(
            itemName,
            youAmount,
            villageAmount,
            increase5x,
            increase,
            decrease,
            decrease5x
           );
  item.itemName = itemName;
  item.youAmount = youAmount;
  item.villageAmount = villageAmount;
  item.increaseButton = increase;
  item.decreaseButton = decrease;
  item.increase5xButton = increase5x;
  item.decrease5xButton = decrease5x;

  return item;
}
