// object for stateful weather
class Weather {
  constructor() {
    this.type = "none";
    this.severity = 0.0;
    this.maxSeverity = 100.0;
  }

  buildWeather(weatherStruct){
    this.type = weatherStruct.type;
    this.severity = weatherStruct.severity;

    return this;
  }
}
