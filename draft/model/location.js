// relative and absolute world location
class gameLocation {
  constructor() {
    this.previousLandmark = 0;
    this.nextLandmark = 0;
    this.position = 0;
  }

  distanceToNext(){
    if(nextLandmark.position <= totalDistanceTraveled){
      return 0;
    }
    return nextLandmark.position - position;
  }
}
