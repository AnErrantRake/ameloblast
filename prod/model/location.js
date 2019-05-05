// relative and absolute world location
class GameLocation {
  constructor() {
    this.previousLandmark = null;
    this.nextLandmark = null;
    this.position = -1;
    this.positionUnit = "parsecs";
  }

  distanceToNext(){
    if(this.nextLandmark === null || this.nextLandmark.location.position <= this.position){
      return 0;
    }
    return this.nextLandmark.location.position - this.position;
  }

  hasNext(){
    return this.nextLandmark != null;
  }

  transfer(){
    this.previousLandmark = this.nextLandmark;
    this.nextLandmark = this.nextLandmark.location.nextLandmark;
  }
}
