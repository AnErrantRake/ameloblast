// game state
class Status {
  constructor() {
    this.playerName = "@@bucko";
    this.playerHealth = new Health();
    this.friendName = "@@friendo";
    this.friendHealth = new Health();
    this.inventory = new Inventory();
    this.location = new GameLocation();
  }

  getHealthAggregate(){
    return "poor";
  }

  getSuppliesAggregate(){
    return "low";
  }

  getRemainingDistanceAsString(){
    return 18 + " parsecs";
  }
}
