// courtesy of https://github.com/kittykatattack/learningPixi#keyboard
function keyboard(value) {
  let key = {};
  key.value = value;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = event => {
    if (event.key === key.value) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  };

  //The `upHandler`
  key.upHandler = event => {
    if (event.key === key.value) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  };

  //Attach event listeners
  const downListener = key.downHandler.bind(key);
  const upListener = key.upHandler.bind(key);

  window.addEventListener(
    "keydown", downListener, false
  );
  window.addEventListener(
    "keyup", upListener, false
  );

  // Detach event listeners
  key.unsubscribe = () => {
    window.removeEventListener("keydown", downListener);
    window.removeEventListener("keyup", upListener);
  };

  return key;
}

// custom functions
function enableInputLogging(textSprite, maxLength){
  console.log("Adding general keypress logging");
  let keys = ["Backspace","[","]","\\",";","'",",",".","/",
              " ",        "{","}","|",":","\"","<",">","?",
              "a","b","c","d","e","f","g","h","i","j","k","l","m",
              "n","o","p","q","r","s","t","u","v","w","x","y","z",
              "A","B","C","D","E","F","G","H","I","J","K","L","M",
              "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
              "`","1","2","3","4","5","6","7","8","9","0","-","=",
              "~","!","@","#","$","%","^","&","*","(",")","_","+",
            ];

  let keyObjects = [];
  for(let i = 0; i < keys.length; i++){
    let keyObject = keyboard(keys[i]);

    if(keyObject.value != "Backspace"){
      keyObject.press = () => {
        if(textSprite.text.length < maxLength){
          textSprite.text = textSprite.text + keys[i];
        }
      };
    }
    else{
      keyObject.press = () => {
        textSprite.text = textSprite.text.substring(0, textSprite.text.length -1);
      };
    }
    keyObjects.push(keyObject);
  }

  return keyObjects;
}

function disableInputLogging(keys){
  console.log("Removing keypress logging for " + keys.length + " keys");
  for(let i = 0; i < keys.length; i++){
    keys[i].unsubscribe();
  }
}
