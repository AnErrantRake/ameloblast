// exchange items between two inventories
function buildTradeView(traderName){
  console.log("Building TradeView");

  // text
  let textSprite =
    new PIXI.BitmapText(traderName,
      {font: "32px FiveByFive",
       tint: "0xFFFFFF"});
  textSprite.anchor.set(0.5,0.35);

  // background
  let txtBG = new PIXI.Sprite(PIXI.Texture.BLACK);
  txtBG.width = textSprite.width;
  txtBG.height = textSprite.height;
  txtBG.anchor.set(0.5,0.5);

  // container
  let cage = new PIXI.Container();
  cage.addChild(textSprite, txtBG);

  return cage;
}
