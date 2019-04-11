// game state
class Status {
  constructor() {
    this.playerName = "@@bucko";
    this.playerHealth = new Health();
    this.friendName = "@@friendo";
    this.friendHealth = new Health();
    this.inventory = new Inventory();
    this.location = new gameLocation();
  }
}
