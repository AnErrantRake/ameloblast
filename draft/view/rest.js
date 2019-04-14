function buildRestView(){
  console.log("Building RestView");

  // status
  let status = buildRestStatusView();
  status.position.set(app.screen.width/2, app.screen.height/3);
  status.pivot.set(0,app.screen.height/6); //centered, top

  // options
  let options = buildRestOptionsView();
  options.position.set(app.screen.width/2, app.screen.height/3);
  options.pivot.set(app.screen.width/4,-app.screen.height/6); //left, bottom

  // actions
  let actions = buildRestActionsView();
  actions.position.set(app.screen.width/2, app.screen.height/3);
  actions.pivot.set(-app.screen.width/4,-app.screen.height/6); //right, bottom

  // container
  let cage = new PIXI.Container();
  cage.addChild(status, options, actions);
  cage.status = status;
  cage.options = options;
  cage.actions = actions;

  return cage;
}