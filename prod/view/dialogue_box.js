// full screen text box - takes an array of size-limited strings
function buildDialogueBox (textArray, callback, hasNext) {
  console.log("Building Dialogue for " + textArray);
  // background
  let background = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_dialogue_box.texture);

  // text
  const style = new PIXI.TextStyle({
    fill: "Black",
    align: "left",
    fontFamily: "font_ttf_notepen",
    fontSize: 24,
    wordWrap: true,
    wordWrapWidth: 280
  });

  let page1 = new PIXI.Text(textArray[0],style);
  page1.position.set(120,70);

  let page2 = new PIXI.Text(textArray[1],style);
  page2.position.set(430,70);

  // control button
  let button;
  if(hasNext){
    button = new PIXI.Sprite(
      PIXI.Loader.shared.resources.texture_dialogue_continue.texture);
  }
  else{
    button = new PIXI.Sprite(
      PIXI.Loader.shared.resources.texture_dialogue_return.texture);
  }
  button.position.set(app.screen.width/2,app.screen.height);
  button.anchor.set(0.5,1.0);
  button.interactive = true;
  button.buttonMode = true;
  button.on('pointerdown', callback);

  // container
  let cage = new PIXI.Container();
  cage.addChild(background, page1, page2, button);

  return cage;
}
