// game state
class Status {
  constructor() {
    this.health = new Health();
    this.inventory = new Inventory(500);
    this.village = new Village(this.inventory.maxSize * 10);
    this.location = new GameLocation();
    this.weather = new Weather();
    this.rateOfTravel = 40; // distance per day
    this.daysElapsed = 0;

    this.isMoving = false;
    this.isArrived = false;
    this.isAlive = true;
    this.isEnroute = true;
  }

  updateVillageBehavior(){
    let keys = this.inventory.getKeys();
    for(let i = 0; i < keys.length; i++){
      this.village.inventory.setConsumption(keys[i], this.inventory.getConsumption(keys[i]));
    }
  }

  getTimeElapsed(){
    return Math.floor(this.daysElapsed / 7) + " weeks";
  }

  getHealthAggregate(){
    if(this.health.currentHealth        > this.health.maxHealth * 3/4){
      return "feeling good";
    } else if(this.health.currentHealth > this.health.maxHealth * 2/4){
      return "uncomfortable";
    } else if(this.health.currentHealth > this.health.maxHealth * 1/4){
      return "ill";
    } else if(this.health.currentHealth > 0){
      return "dying";
    } else{
      return "death's door";
    }
  }

  getSuppliesAggregate(){
    let supply = this.inventory.maxSize - this.inventory.getSpace();
    if(supply         > this.inventory.maxSize * 3/4){
      return "high";
    } else if(supply  > this.inventory.maxSize * 2/4){
      return "moderate";
    } else if(supply  > this.inventory.maxSize * 1/4){
      return "low";
    } else if(supply  > 0){
      return "minimal";
    } else {
      return "none";
    }
  }

  getRemainingDistanceAsString(){
    return this.location.distanceToNext() + " " + this.location.positionUnit;
  }

  getForecast(){
    let position = this.location.position;
    for(let i = 0; i < WEATHER.length; i++){
      if(position < 365 + ( 365 * (i*i) )){
        this.weather = WEATHER[i];
        return;
      }
    }
    // too far, worst weather
    this.weather = WEATHER[WEATHER.length - 1];
  }

  moveOn(){
    this.location.transfer();
    // end of line, turn around and book it for home
    if(! this.location.hasNext() && this.isEnroute ){
      console.log("Turning around for home");
      this.location.nextLandmark = this.village.landmark;
      this.location.nextLandmark.location.position = this.location.position * 2;
      this.isEnroute = ! this.isEnroute;
    }

    this.isArrived = false;
  }

  scavenge(){
    console.log("Scavenging for supplies");

    const toothbrushStasis = this.inventory.contents.toothbrushes.count;
    const toothpasteStasis = this.inventory.contents.toothpaste.count;
    const flossStasis = this.inventory.contents.floss.count;
    const mouthwashStasis = this.inventory.contents.mouthwash.count;

    // pass the time
    for(let i = 0; i < 7; i++){
      //reset inventory - scavenge always maintains inventory
      this.passDay();
      this.inventory.setCount('toothbrushes', toothbrushStasis);
      this.inventory.setCount('toothpaste', toothpasteStasis);
      this.inventory.setCount('floss', flossStasis);
      this.inventory.setCount('mouthwash', mouthwashStasis);
    }

    // generate random scavenge Inventory
    let scavengeResult = new Inventory(this.inventory.maxSize / 10);
    let keys = scavengeResult.getKeys();

    // add to player inventory
    for(let i = 0; i < keys.length; i++){
      // generate random amount
      let value = getRandomInt(scavengeResult.maxSize) % scavengeResult.getSpace();
      scavengeResult.setCount(keys[i], value);
      //trade up to 5 into player inventory
      exchangeCountItems(scavengeResult, this.inventory, keys[i], (this.inventory.maxSize * 1/10));
    }
  }

  passDay(){
    console.log("A day passes");
    this.daysElapsed++;

    this.getForecast();
    // get day's inventory
    let dayUse = this.inventory.getDayUse();

    // for each set
    for(let i = 0; i < dayUse.length; i++){
      // combine toothbrush and toothpaste
      if(dayUse[i][0] === "toothbrushes"
        && dayUse[i][1] === "toothpaste"){
        // merge into second element
        dayUse[i][1] = "toothbrush_with_toothpaste";
        // drop first element
        dayUse[i].shift();
      }
      // for each tool in the set
      for(let j = 0; j < dayUse[i].length; j++){
        // clean
        this.health.clean(dayUse[i][j]);
      }
    }

    // decay
    this.health.decay(this.weather);

    this.health.updateHealth();

    // disease checks - random, on the day, and only below health threshold
    if(this.daysElapsed % getRandomInt(7) === 0
        && this.health.currentHealth < this.health.maxHealth * 3/4){
      console.log("Checking for disease");
      let currentHealth = this.health.currentHealth;
      let maxHealth = this.health.maxHealth;

      // iterate through possible diseases and attempt to contract
      for(let i = 0; i < DISEASES.length; i++){
        if(DISEASES[i].canBeContracted(currentHealth, maxHealth)){
          if(this.daysElapsed % getRandomInt(53) === 0){
            DISEASES[i].setContracted(true);
            this.health.addDisease(DISEASES[i]);
            GAME_EVENT = "You've contracted " + DISEASES[i].type;
            return;
          }
        }
      }
    }
  }

  pause(){
    console.log("Pausing");
    this.isMoving = false;
  }

  resume(){
    console.log("Resuming");
    this.isMoving = true;
  }

  // status increment
  move(){
    if(this.location.hasNext()){
      this.location.position += 1;
      if(this.location.distanceToNext() <= 0){
        this.isArrived = true;
      }
      else if(this.location.position % this.rateOfTravel === 0){
        this.passDay();
      }
    }
  }
}
