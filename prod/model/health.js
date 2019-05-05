// character vitals
class Health {
  constructor() {
    this.maxHealth = 32;
    this.currentHealth = this.maxHealth;
    this.teeth = [];
    for(let i = 1; i <= this.maxHealth; i++){
      this.teeth.push(new Tooth(i));
    }
    this.diseases = [];
  }

  clean(tool){
    let tooth = null;
    for(let i = 0; i < this.teeth.length; i++){
      tooth = this.teeth[i];
      // clean each tooth
      tooth.clean(tool);
    }
  }

  decay(weather){
    let tooth = null;
    for(let i = 0; i < this.teeth.length; i++){
      tooth = this.teeth[i];
      // decay each tooth
      tooth.decay(weather, this.diseases);
    }
  }

  addDisease(disease){
    console.log("Contracting " + disease.type);
    if( ! this.diseases.includes(disease)){
      this.diseases.push(disease);
    }
  }

  updateHealth(){
    let healthAggregate = 0;
    let tooth = null;
    for(let i = 0; i < this.teeth.length; i++){
      tooth = this.teeth[i];
      // aggregate health
      healthAggregate += tooth.getHealth();
    }
    this.currentHealth = healthAggregate;
  }

  isAlive(){
    return this.currentHealth > 0;
  }
}
