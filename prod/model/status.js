// game state
class Status {
  constructor() {
    this.playerHealth = new Health();
    this.inventory = new Inventory(50);
    this.village = new Village();
    this.location = new GameLocation();
    this.isRunning = false;
    this.isArrived = false;
  }

  updateVillageBehavior(){
    let keys = this.inventory.getKeys();
    for(let i = 0; i < keys.length; i++){
      this.village.inventory.setConsumption(keys[i], this.inventory.getConsumption(keys[i]));
    }
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
