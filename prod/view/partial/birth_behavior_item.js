function buildBirthBehaviorItem(step, leftBreak, rightBreak, columnOffset){
  console.log("Building BirthBehaviorItem");

  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "center"};
  let dataStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "center"};
  let startY = 0;

  // item name - left of left break
  let itemName = new PIXI.BitmapText("itemnameplaceholder", labelStyle);
  itemName.anchor.set(1.0,0.5);
  itemName.position.set(leftBreak, startY);

  // action - right of left break
  let action = new PIXI.BitmapText("actionplchldr", labelStyle);
  action.anchor.set(0.0,0.5);
  action.position.set(leftBreak + step, startY);

  // consumptionRate - left of right break
  let consumptionRate = new PIXI.BitmapText("##", labelStyle);
  consumptionRate.anchor.set(1.0,0.5);
  consumptionRate.position.set(rightBreak - columnOffset + step + step, startY);

  // per day - right of right break
  let perDay = new PIXI.BitmapText("per day", labelStyle);
  perDay.anchor.set(0.0,0.5);
  perDay.position.set(consumptionRate.x + consumptionRate.width, startY);

  // buttons - left of edge
  let buttons = new PIXI.Container();

  // button left - right of left break
  let increase = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_up.texture);
  increase.width = increase.height = step * 1.5;
  increase.interactive = true;
  increase.buttonMode = true;
  increase.anchor.set(1.0,0.5);
  increase.position.set(0, 0);

  // button right - left of right break
  let decrease = new PIXI.Sprite(PIXI.Loader.shared.resources.texture_icon_down.texture);
  decrease.width = decrease.height = step * 1.5;
  decrease.interactive = true;
  decrease.buttonMode = true;
  decrease.anchor.set(1.0,0.5);
  decrease.position.set(increase.x + increase.width + step, 0);

  buttons.position.set(app.screen.width - increase.width - decrease.width - step, startY)
  buttons.addChild(increase, decrease);
  buttons.up = increase;
  buttons.down = decrease;

  // modifiers
  let item = new PIXI.Container();
  item.addChild(
            itemName,
            action,
            consumptionRate,
            perDay,
            buttons
           );
  item.itemName = itemName;
  item.action = action;
  item.consumptionRate = consumptionRate;
  item.buttons = buttons;

  return item;
}
