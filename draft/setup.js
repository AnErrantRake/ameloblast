function setup(){
  const loader = new PIXI.Loader();
  loader.add("font_bm_bonefish","../fonts/Bonefish_white.fnt");
  loader.add("font_bm_fivebyfive_white","../fonts/FiveByFive_white.fnt");
  loader.add("font_bm_genown_white","../fonts/GENOWN_white.fnt");
  loader.add("font_bm_notepen_white","../fonts/Notepen_white.fnt");
  loader.add("font_bm_st26k_white","../fonts/St26k_white.fnt");
  loader.add("font_bm_teacherspet_white","../fonts/TeachersPet_white.fnt");
  loader.load(mainMenu);
}

function mainMenu(){
  let title =
    new PIXI.BitmapText("ameloblast", {font: "48px GENOWN_white"});
  title.anchor.set(0.5,0.5);
  title.position.set(app.screen.width/2,150);

  app.stage.addChild(title);

  let menu_newgame =
    new PIXI.BitmapText("new game", {font: "32px FiveByFive_white"});
  menu_newgame.anchor.set(0.5,0.5);
  menu_newgame.position.set(app.screen.width/2,app.screen.height/2);
  menu_newgame.interactive = true;

  menu_newgame.click = function(data){
    app.stage.removeChildren();
    app.ticker.add(delta => gameLoop(delta));
  }

  menu_newgame.mouseover = function(data){
    this.isOver = true;
    if(this.isdown)return

    this.text = "!" + this.text + "!";
  }

  menu_newgame.mouseout = function(data){
    this.isOver = true;
    if(this.isdown)return

    this.text = "new game";
  }

  app.stage.addChild(menu_newgame);
}

function gameLoop(delta){
  state(delta);
}
