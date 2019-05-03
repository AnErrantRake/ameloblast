// counters for possible possessions
class Inventory {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.contents = {
      toothbrushes: {
        label: "Toothbrushes: ",
        count: 0.0,
        action: "brush",
        consumption: 0,
        minConsumption: 0,
        maxConsumption: 24
      },
      toothpaste: {
        label: "Toothpaste: ",
        count: 0.0,
        action: "apply",
        consumption: 0,
        minConsumption: 0,
        maxConsumption: 24
      },
      floss: {
        label: "Floss: ",
        count: 0.0,
        action: "floss",
        consumption: 0,
        minConsumption: 0,
        maxConsumption: 24
      },
      mouthwash: {
        label: "Mouthwash: ",
        count: 0.0,
        action: "rinse",
        consumption: 0,
        minConsumption: 0,
        maxConsumption: 24
      },
    };
  }

  getKeys(){
    return Object.keys(this.contents);
  }

  spaceRemains(){
    return this.getSpace() > 0;
  }

  getSpace(){
    let totalContents = 0;
    let keys = this.getKeys();
    for(let i = 0; i < keys.length; i++){
      totalContents +=  this.contents[keys[i]].count;
    }
    return this.maxSize - totalContents;
  }

  getLabel(item){
    return this.contents[item].label;
  }

  getActionLabel(item){
    return this.contents[item].action;
  }

  getConsumption(item){
    return this.contents[item].consumption;
  }

  setConsumption(item, rate){
    this.contents[item].consumption = rate;
  }

  getCount(item){
    return this.contents[item].count;
  }

  setCount(item, count){
    this.contents[item].count = count;
  }

  increaseConsumption(item){
    if(this.contents[item].consumption < this.contents[item].maxConsumption){
      this.contents[item].consumption++;
      return true;
    }
    return false;
  }

  decreaseConsumption(item){
    if(this.contents[item].consumption > this.contents[item].minConsumption){
      this.contents[item].consumption--;
      return true;
    }
    return false;
  }

  increase(item){
    if(this.spaceRemains()){
      this.contents[item].count++;
      return true;
    }
    return false;
  }

  decrease(item){
    if(this.contents[item].count > 0){
      this.contents[item].count--;
      return true;
    }
    return false;
  }

}
