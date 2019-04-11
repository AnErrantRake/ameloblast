// load resources and move to main_menu

function setup(){
  console.log("Loading resources");
  // fonts - bitmap
  PIXI.Loader.shared.add("font_bm_bonefish","../fonts/Bonefish.fnt"); //handwritten cursive
  PIXI.Loader.shared.add("font_bm_fivebyfive","../fonts/FiveByFive.fnt"); //caps, menu font
  PIXI.Loader.shared.add("font_bm_genown","../fonts/GENOWN.fnt"); //title font, techy, almost illegible
  PIXI.Loader.shared.add("font_bm_notepen","../fonts/Notepen.fnt"); //handwritten print
  PIXI.Loader.shared.add("font_bm_st26k","../fonts/St26k.fnt"); //caps edgy, almost illegible
  PIXI.Loader.shared.add("font_bm_teacherspet","../fonts/TeachersPet.fnt"); //large neat cursive
  // fonts - ttf
  PIXI.Loader.shared.add("font_ttf_bonefish","../fonts/Bonefish.ttf"); //handwritten cursive
  PIXI.Loader.shared.add("font_ttf_fivebyfive","../fonts/FiveByFive.ttf"); //caps, menu font
  PIXI.Loader.shared.add("font_ttf_genown","../fonts/GENOWN.ttf"); //title font, techy, almost illegible
  PIXI.Loader.shared.add("font_ttf_notepen","../fonts/Notepen.ttf"); //handwritten print
  PIXI.Loader.shared.add("font_ttf_st26k","../fonts/St26k.ttf"); //caps edgy, almost illegible
  PIXI.Loader.shared.add("font_ttf_teacherspet","../fonts/TeachersPet.ttf"); //large neat cursive

  // textures
  PIXI.Loader.shared.add("texture_dialogue_box", "../gfx/dialogue_box.png");
  PIXI.Loader.shared.add("texture_dialogue_continue", "../gfx/dialogue_continue.png");
  PIXI.Loader.shared.add("texture_dialogue_return", "../gfx/dialogue_return.png");
  PIXI.Loader.shared.add("texture_travel_bg", "../gfx/travel_bg.png");
  PIXI.Loader.shared.load(mainMenu);
}
