// object for abstracting disease
class Disease {
  constructor() {
    this.type = "none";
    this.severity = 0.0;
    this.maxSeverity = 100.0;
    this.healthThreshold = 0;
    this.contracted = false;
  }

  buildDisease(diseaseStruct){
    this.type = diseaseStruct.type;
    this.severity = diseaseStruct.severity;
    this.healthThreshold = diseaseStruct.healthThreshold;
    return this;
  }

  canBeContracted(currentHealth, maxHealth){
    return (! this.contracted)
          && ((currentHealth / maxHealth) < this.healthThreshold);
  }

  setContracted(status){
    this.contracted = status;
  }
}
