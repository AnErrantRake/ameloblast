function buildBirthSupplies(count){
  console.log("Building BirthSuppliesView");

  let step = 24;
  let divider = 8;
  let descBreak = app.screen.height * 3/8;
  let leftBreak = app.screen.width/3;
  let rightBreak = leftBreak * 2;
  let columnOffset = leftBreak / 2;

  // container
  let cage = new PIXI.Container();
  cage.items = [];

  // info box - top of screen, full width
  const style = new PIXI.TextStyle({
    fill: "White",
    align: "center",
    fontFamily: "font_ttf_notepen",
    fontSize: step,
    wordWrap: true,
    wordWrapWidth: app.screen.width - step
  });

  let desc = new PIXI.Text("placeholder",style);
  desc.anchor.set(0.5, 0);
  desc.position.set(app.screen.width/2, step);
  cage.addChild(desc);

  // three columns - blank, you, village
  let header = buildBirthSuppliesHeader(step * 1.5, leftBreak, rightBreak, columnOffset);
  header.position.set(0, descBreak + step);
  let prev = header;
  cage.addChild(header);

  // scale desc if overlapping
  while( desc.y + desc.height >= header.y - (header.height/2)){
    desc.height = desc.height - step;
  }

  // for each item ->
  for(let i = 0; i < count; i++){
    let item = buildBirthSuppliesItem(step, leftBreak, rightBreak, columnOffset);
    item.position.set(0, prev.y + prev.height + (divider * 2));
    cage.addChild(item);
    cage.items.push(item);
    prev = item;
  }

  // submit button - bottom of screen, centered
  let submitButton = new PIXI.Sprite(
    PIXI.Loader.shared.resources.texture_dialogue_continue.texture);
  submitButton.width = submitButton.height = step * 3;
  submitButton.anchor.set(0.5, 1.0);
  submitButton.interactive = true;
  submitButton.buttonMode = true;
  submitButton.position.set(app.screen.width/2, app.screen.height - step);
  submitButton.visible = false;
  cage.addChild(submitButton);
  cage.submitButton = submitButton;

  // ameloblast inventory
  let counter = buildBirthSuppliesCounter(step);
  counter.position.set(step, app.screen.height - step);
  cage.addChild(counter);
  cage.counter = counter;

  return cage;
}
