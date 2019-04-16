// game state
class Status {
  constructor() {
    this.playerName = "@@bucko";
    this.playerHealth = new Health();
    this.friendName = "@@friendo";
    this.friendHealth = new Health();
    this.inventory = new Inventory();
    this.location = new GameLocation();
    this.isRunning = false;
    this.isArrived = false;
  }

  getHealthAggregate(){
    return "poor";
  }

  getRemainingDistanceAsString(){
    return this.location.distanceToNext() + " " + this.location.positionUnit;
  }

  moveOn(){
    this.location.transfer();
    this.isArrived = false;
  }

  // time increment
  update(){
    if(this.location.hasNext()){
      this.location.position += 1;
      if(this.location.distanceToNext() <= 0){
        this.isArrived = true;
      }
    }
  }
}
