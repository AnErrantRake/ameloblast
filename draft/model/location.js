// relative and absolute world location
class GameLocation {
  constructor() {
    this.previousLandmark = new Landmark();
    this.nextLandmark = new Landmark();
    this.position = 0;
  }

  distanceToNext(){
    if(nextLandmark.position <= totalDistanceTraveled){
      return 0;
    }
    return nextLandmark.position - position;
  }
}
