// object abstracting plaque and tartar part of oral health
// citation - DarbyWalsh.2015Dht
class Buildup {
  constructor(max) {
    this.plaqueCounter = 0;
    this.tartarCounter = 0;
    this.tartarMax = max; // general size of potential buildup
    this.precipitationPoint = 100; //number of days
  }

  // -1 as type removes plaque, 1 as type adds plaque
  update(count, type){
    this.plaqueCounter = this.plaqueCounter + (count * type);
    if(this.plaqueCounter < 0){
      this.plaqueCounter = 0;
    }
    while(this.plaqueCounter > this.precipitationPoint){
      this.tartarCounter++;
      this.plaqueCounter = this.plaqueCounter - this.precipitationPoint;
    }
  }

  tartarRatio(){
    let ratio = this.tartarCounter / this.tartarMax;
    if(ratio > 1){
      ratio = 1;
    }
    return ratio;
  }
}
