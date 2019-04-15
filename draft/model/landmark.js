// object for landmarks within world
class Landmark {
  constructor() {
    this.type = "info"; //TODO: defined types
    this.graphic = PIXI.Loader.shared.resources.texture_landmark_info_placeholder.texture;
    this.info = "information to to be displayed next to graphic";
  }
}