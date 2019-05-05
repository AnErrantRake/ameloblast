class Village {
  constructor(inventorySize) {
    this.health = [];
    this.inventory = new Inventory(inventorySize);
    let landmarkStruct = {

    }
    this.landmark = new Landmark().buildLandmark(
      {
      type: "endgame",
      graphic: null,
      info: null,
      notes: null,
      position: -1
    }
    );
  }
}
