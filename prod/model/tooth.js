// object abstracting tooth part of oral health
// citation - DarbyWalsh.2015Dht
class Tooth {
  constructor(id) {
    this.id = id; // corresponds to international numbering system for permanent dentition
    this.proximalBuildup = new Buildup(60);  // between teeth
    this.occlusalBuildup = new Buildup(80);  // biting surfaces (technically only of rear teeth)
    this.facialBuildup = new Buildup(60);    // outward-facing sides
    this.lingualBuildup = new Buildup(60);   // inward-facing sides
    this.healthTotal = 1;       // % - major abstraction here
  }

  clean(tool){
    console.log("Cleaning with " + tool);
    switch(tool){
      case "toothbrush":
        // citation - TBD
        this.removeBuildup(this.proximalBuildup, 0/100);
        this.removeBuildup(this.occlusalBuildup, 35/100);
        this.removeBuildup(this.facialBuildup,   35/100);
        this.removeBuildup(this.lingualBuildup,  35/100);
        break;
      case "toothpaste":
        // citation - TBD
        this.removeBuildup(this.proximalBuildup, 5/100);
        this.removeBuildup(this.occlusalBuildup, 10/100);
        this.removeBuildup(this.facialBuildup,   15/100);
        this.removeBuildup(this.lingualBuildup,  15/100);
        break;
      case "toothbrush_with_toothpaste":
        // citation - TBD
        this.removeBuildup(this.proximalBuildup, 10/100);
        this.removeBuildup(this.occlusalBuildup, 65/100);
        this.removeBuildup(this.facialBuildup,   60/100);
        this.removeBuildup(this.lingualBuildup,  60/100);
        break;
      case "floss":
        // citation - TBD
        this.removeBuildup(this.proximalBuildup, 70/100);
        this.removeBuildup(this.occlusalBuildup, 5/100);
        this.removeBuildup(this.facialBuildup,   5/100);
        this.removeBuildup(this.lingualBuildup,  5/100);
        break;
      case "mouthwash":
        // citation - TBD
        this.removeBuildup(this.proximalBuildup, 5/100);
        this.removeBuildup(this.occlusalBuildup, 10/100);
        this.removeBuildup(this.facialBuildup,   10/100);
        this.removeBuildup(this.lingualBuildup,  10/100);
        break;
      default:
        break;
    }
  }

  removeBuildup(buildup, efficacy){
    // efficacy as random value within percentage of maximum plaque
    let change = getRandomIntInRange(efficacy * buildup.precipitationPoint, buildup.precipitationPoint);
    buildup.update(change, -1);
  }

  decay(weather, diseases){
    // severity of the weather as base + stochasticity
    let change = getRandomIntInRange(weather.severity, weather.maxSeverity);

    // plus decay from any diseases
    for(let i = 0; i < diseases.length; i++){
      change += getRandomIntInRange(diseases[i].severity, diseases[i].maxSeverity);
    }

    // add change to each buildup region
    this.proximalBuildup.update(change, 1);
    this.occlusalBuildup.update(change, 1);
    this.facialBuildup.update(change, 1);
    this.lingualBuildup.update(change, 1);
  }

  getHealth(){
    let health = 4
               - this.proximalBuildup.tartarRatio()
               - this.occlusalBuildup.tartarRatio()
               - this.facialBuildup.tartarRatio()
               - this.lingualBuildup.tartarRatio();

    this.healthTotal = health / 4;
    return this.healthTotal;
  }
}
