// load resources and move to main_menu

function setup(){
  console.log("Loading resources");
  let debug = keyboard("Escape");
  debug.press = () => {
    rest();
  };

//  app.autoStart = false;
//  app.ticker.add(travelUI);

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
  PIXI.Loader.shared.add("texture_icon_up", "gfx/icon_up.png");
  PIXI.Loader.shared.add("texture_icon_down", "gfx/icon_down.png");
  PIXI.Loader.shared.add("texture_landmark_info_placeholder", "gfx/landmark_info_placeholder.png");

  // load fonts before loading assets and building main menu
  WebFontConfig = {
    custom: {
      families: ['font_ttf_bonefish', 'font_ttf_fivebyfive', 'font_ttf_genown', 'font_ttf_notepen', 'font_ttf_st26k'],
      urls: ['/stylesheet.css']
    },
    active: PIXI.Loader.shared.load(mainMenu),
  };
  WebFont.load({
      custom: {
        families: ['font_ttf_bonefish', 'font_ttf_fivebyfive', 'font_ttf_genown', 'font_ttf_notepen', 'font_ttf_st26k']
      }
    }
  );
}
