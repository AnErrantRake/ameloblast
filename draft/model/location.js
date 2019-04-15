// relative and absolute world location
class GameLocation {
  constructor() {
    this.previousLandmark = null;
    this.nextLandmark = null;
    this.position = -1;
    this.positionUnit = "parsecs";
  }

  distanceToNext(){
    if(nextLandmark.position <= position){
      return 0;
    }
    return nextLandmark.position - position;
  }
}
