// exchange items between two inventories
function buildTradeView(traderName){
  console.log("Building TradeView for " + traderName);

  // container
  let cage = new PIXI.Container();
  let dummy = buildMenuOption(traderName, 32)
  cage.addChild(dummy);
  cage.position.set(app.screen.width/2,app.screen.height/2);
  cage.dummy = dummy;

  return cage;
}
