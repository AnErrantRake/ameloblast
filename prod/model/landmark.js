// object for landmarks within world
class Landmark {
  constructor() {
    this.type = "none"; //TODO: defined types
    this.graphic = null;
    this.info = {title: "default title", description: "a default description of multiple words and phrases that ideally overlaps within the defined boundaries"};
    this.notes = null;
    this.location = null;
    this.hasBeenRead = false;
  }

  // helper function for array construction - overloaded constructor
  buildLandmark(landmarkStruct){
    this.type = landmarkStruct.type;
    this.graphic = landmarkStruct.graphic;
    this.info = landmarkStruct.info;
    this.notes = landmarkStruct.notes;
    this.location = new GameLocation();
    this.location.position = landmarkStruct.position;

    return this;
  }

  getNotes(){
    this.hasBeenRead = true;
    return this.notes.journalEntry;
  }

  getCitation(){
    return this.notes.citation;
  }
}
