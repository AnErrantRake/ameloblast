// status overview for inactive travel i.e. rest
function buildRestStatusView(){
  console.log("Building RestStatusView");

  let step = 18;
  let labelStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "right"};
  let dataStyle = {font: step + "px FiveByFive", tint: "0xFFFFFF", align: "left"};
  let center = app.screen.width/2;
  let startY = app.screen.height;

  // date
  let dateLabel = new PIXI.BitmapText(str_travel['status_date'], labelStyle);
  dateLabel.anchor.set(1.0,0.5);
  dateLabel.position.set(center, startY);

  let dateData = new PIXI.BitmapText("~~~~", dataStyle);
  dateData.anchor.set(0.0,0.5);
  dateData.position.set(center + 15, dateLabel.position.y);

  // environment
  let environLabel = new PIXI.BitmapText(str_travel['status_environment'], labelStyle);
  environLabel.anchor.set(1.0,0.5);
  environLabel.position.set(center, startY + (1 * step));

  let environData = new PIXI.BitmapText("pancakes", dataStyle);
  environData.anchor.set(0.0,0.5);
  environData.position.set(center + 15, environLabel.position.y);

  // health
  let healthLabel = new PIXI.BitmapText(str_travel['status_health'], labelStyle);
  healthLabel.anchor.set(1.0,0.5);
  healthLabel.position.set(center, startY + (2 * step));

  let healthData = new PIXI.BitmapText("scaled value", dataStyle);
  healthData.anchor.set(0.0,0.5);
  healthData.position.set(center + 15, healthLabel.position.y);

  // supplies
  let suppliesLabel = new PIXI.BitmapText(str_travel['status_supplies'], labelStyle);
  suppliesLabel.anchor.set(1.0,0.5);
  suppliesLabel.position.set(center, startY + (3 * step));

  let suppliesData = new PIXI.BitmapText("x units", dataStyle);
  suppliesData.anchor.set(0.0,0.5);
  suppliesData.position.set(center + 15, suppliesLabel.position.y);

  // next landmark
  let nextLandmarkLabel = new PIXI.BitmapText(str_travel['status_next_landmark'], labelStyle);
  nextLandmarkLabel.anchor.set(1.0,0.5);
  nextLandmarkLabel.position.set(center, startY + (4 * step));

  let nextLandmarkData = new PIXI.BitmapText("y units", dataStyle);
  nextLandmarkData.anchor.set(0.0,0.5);
  nextLandmarkData.position.set(center + 15, nextLandmarkLabel.position.y);

  // container
  let cage = new PIXI.Container();
  cage.addChild(dateLabel, dateData,
                environLabel, environData,
                healthLabel, healthData,
                suppliesLabel, suppliesData,
                nextLandmarkLabel, nextLandmarkData
              );
  cage.date = dateData.text;
  cage.environment = environData.text;
  cage.health = healthData.text;
  cage.supplies = suppliesData.text;
  cage.nextLandmark = nextLandmarkData.text;

  return cage;
}
