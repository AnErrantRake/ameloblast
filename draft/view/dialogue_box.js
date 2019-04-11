// full screen text box
function buildDialogueBox (text, callback, hasNext) {
  console.log("Building Dialogue for " + text);
  // background
  let background = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_dialogue_box.texture);

  // text
  //TODO: increase fidelity of line breaks - doesn't handle large amounts of uppercase
  // also will break mid-word without more intelligent handling
  let endOfLine = 21; //characters per line
  let endOfPage = 11; //lines per page
  let maxChar = endOfLine * endOfPage; //not including \n chars

  if(text.length > (maxChar*2)){
    throw ('Input to dialogue overlong - malformed data: ' + text);
  }

  let outputPage1 = "";
  let outputPage2 = "";
  for(var i = 0; i < (text.length / endOfLine); i++){
    if(outputPage1.length + endOfLine < maxChar){
      outputPage1 = outputPage1 + text.substr((i * endOfLine), endOfLine) + "\n";
    }
    else{
      outputPage2 = outputPage2 + text.substr((i * endOfLine), endOfLine) + "\n";
    }
  }
  let page1 =
    new PIXI.BitmapText(outputPage1,
      {font: "32px Notepen",
       tint: "0x000000"});
  page1.position.set(120,70);

  let page2 =
    new PIXI.BitmapText(outputPage2,
      {font: "32px Notepen",
       tint: "0x000000"});
  page2.position.set(425,70);

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
