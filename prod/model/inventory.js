// counters for possible possessions
class Inventory {
  constructor() {
    this.toothbrushes = {label: "Toothbrushes: ", count: 5.0,   unit: "brushes", consumption: 1.0};
    this.toothpaste = {label: "Toothpaste: ", count: 10.0,  unit: "fl oz",   consumption: 1.0};
    this.floss      = {label: "Floss: ", count: 100.0, unit: "cm",      consumption: 1.0};
  }

  getToothbrushes(){
    return this.toothbrushes.count + " " + this.toothbrushes.unit;
  }

  getToothbrushesConsumption(){
    return this.toothbrushes.consumption + " " + this.toothbrushes.unit;
  }

  increaseToothbrushesConsumption(){
    if(this.toothbrushes.consumption < this.toothbrushes.count){
      this.toothbrushes.consumption++;
    }
  }

  decreaseToothbrushesConsumption(){
    if(this.toothbrushes.consumption > 0){
      this.toothbrushes.consumption--;
    }
  }


  getToothpaste(){
    return this.toothpaste.count + " " + this.toothpaste.unit;
  }

  getToothpasteConsumption(){
    return this.toothpaste.consumption + " " + this.toothpaste.unit;
  }

  increaseToothpasteConsumption(){
    if(this.toothpaste.consumption < this.toothpaste.count){
      this.toothpaste.consumption++;
    }
  }

  decreaseToothpasteConsumption(){
    if(this.toothpaste.consumption > 0){
      this.toothpaste.consumption--;
    }
  }


  getFloss(){
    return this.floss.count + " " + this.floss.unit;
  }

  getFlossConsumption(){
    return this.floss.consumption + " " + this.floss.unit;
  }

  increaseFlossConsumption(){
    if(this.floss.consumption < this.floss.count){
      this.floss.consumption++;
    }
  }

  decreaseFlossConsumption(){
    if(this.floss.consumption > 0){
      this.floss.consumption--;
    }
  }
}
