function buildRestView(){
  console.log("Building RestView");

  // status
  let status = buildRestStatusView();
  status.position.set(app.screen.width/2, app.screen.height/2);
//  status.pivot.set(status.position.x - (status.width/2),status.position.y - status.height); //centered, anchored to bottom

  // options
  let options = buildRestOptionsView();
  options.position.set(app.screen.width/2, app.screen.height/2);
//  options.pivot.set(options.position.x - options.width,options.position.y); //anchored top right

  // actions
  let actions = buildRestActionsView();
  actions.position.set(app.screen.width/2, app.screen.height/2);
//  actions.pivot.set(actions.position.x,actions.position.y); //anchored top left

  // container
  let cage = new PIXI.Container();
  cage.addChild(status, options, actions);
  cage.status = status;
  cage.options = options;

  return cage;
}