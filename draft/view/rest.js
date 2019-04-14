function buildRestView(){
  console.log("Building RestView");

  // status
  let status = buildRestStatusView();
  status.position.set(app.screen.width/2, app.screen.height/2);
  status.anchor.set(0.5,1.0); //centered, anchored to bottom

  // options
  let options = buildRestOptionsView();
  options.position.set(app.screen.width/2, app.screen.height/2);
  options.anchor.set(1.0,0.0); //right, anchored to top

  // actions
  let actions = buildRestActionsView();
  actions.position.set(app.screen.width/2, app.screen.height/2);
  actions.anchor.set(0.0,0.0); //left, anchored to top

  // container
  let cage = new PIXI.Container();
  cage.addChild(status, options, actions);
  cage.status = status;
  cage.options = options;

  return cage;
}