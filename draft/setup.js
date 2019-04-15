// load resources and move to main_menu

function setup(){
  console.log("Loading resources");
  let debug = keyboard("Escape");
  debug.press = () => {
    reset();
  };

  app.ticker.add(travelUI);

  // fonts - bitmap
  PIXI.Loader.shared.add("font_bm_bonefish","../fonts/Bonefish.fnt"); //handwritten cursive
  PIXI.Loader.shared.add("font_bm_fivebyfive","../fonts/FiveByFive.fnt"); //caps, menu font
  PIXI.Loader.shared.add("font_bm_genown","../fonts/GENOWN.fnt"); //title font, techy, almost illegible
  PIXI.Loader.shared.add("font_bm_notepen","../fonts/Notepen.fnt"); //handwritten print
  PIXI.Loader.shared.add("font_bm_st26k","../fonts/St26k.fnt"); //caps edgy, almost illegible

  // textures
  PIXI.Loader.shared.add("texture_dialogue_box", "gfx/dialogue_box.png");
  PIXI.Loader.shared.add("texture_dialogue_continue", "gfx/dialogue_continue.png");
  PIXI.Loader.shared.add("texture_dialogue_return", "gfx/dialogue_return.png");
  PIXI.Loader.shared.add("texture_travel_bg", "gfx/travel_bg.png");
  PIXI.Loader.shared.add("texture_amelo_mid", "gfx/amelo_mid.png");
  PIXI.Loader.shared.add("texture_amelo_left", "gfx/amelo_left.png");
  PIXI.Loader.shared.add("texture_amelo_right", "gfx/amelo_right.png");
  PIXI.Loader.shared.add("texture_landmark_info_placeholder", "gfx/landmark_info_placeholder.png");
  PIXI.Loader.shared.load(mainMenu);
}
