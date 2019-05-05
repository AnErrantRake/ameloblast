// status overview for inactive travel i.e. rest
function buildRestStatusView(){
  console.log("Building RestStatusView");

  let step = 24;
  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "right"};
  let dataStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "left"};
  let center = 0;
  let startY = 0;

  // time
  let timeLabel = new PIXI.BitmapText(str_travel['status_time'], labelStyle);
  timeLabel.anchor.set(1.0,0.5);
  timeLabel.position.set(center, startY);

  let timeData = new PIXI.BitmapText("~~~~", dataStyle);
  timeData.anchor.set(0.0,0.5);
  timeData.position.set(center + 15, timeLabel.position.y);

  // environment
  let environLabel = new PIXI.BitmapText(str_travel['status_environment'], labelStyle);
  environLabel.anchor.set(1.0,0.5);
  environLabel.position.set(center, startY + (1 * step));

  let environData = new PIXI.BitmapText("pancakes", dataStyle);
  environData.anchor.set(0.0,0.5);
  environData.position.set(center + 15, environLabel.position.y);

  // supplies
  let suppliesLabel = new PIXI.BitmapText(str_travel['status_supplies'], labelStyle);
  suppliesLabel.anchor.set(1.0,0.5);
  suppliesLabel.position.set(center, startY + (3 * step));

  let suppliesData = new PIXI.BitmapText("x units", dataStyle);
  suppliesData.anchor.set(0.0,0.5);
  suppliesData.position.set(center + 15, suppliesLabel.position.y);

  // health
  let healthLabel = new PIXI.BitmapText(str_travel['status_health'], labelStyle);
  healthLabel.anchor.set(1.0,0.5);
  healthLabel.position.set(center, startY + (2 * step));

  let healthData = new PIXI.BitmapText("scaled value", dataStyle);
  healthData.anchor.set(0.0,0.5);
  healthData.position.set(center + 15, healthLabel.position.y);

  // next landmark
  let nextLandmarkLabel = new PIXI.BitmapText(str_travel['status_next_landmark'], labelStyle);
  nextLandmarkLabel.anchor.set(1.0,0.5);
  nextLandmarkLabel.position.set(center, startY + (4 * step));

  let nextLandmarkData = new PIXI.BitmapText("y units", dataStyle);
  nextLandmarkData.anchor.set(0.0,0.5);
  nextLandmarkData.position.set(center + 15, nextLandmarkLabel.position.y);

  // container
  let cage = new PIXI.Container();
  cage.addChild(timeLabel, timeData,
                environLabel, environData,
                healthLabel, healthData,
                suppliesLabel, suppliesData,
                nextLandmarkLabel, nextLandmarkData
              );
  cage.time = timeData;
  cage.environment = environData;
  cage.health = healthData;
  cage.supplies = suppliesData;
  cage.nextLandmark = nextLandmarkData;

  return cage;
}
