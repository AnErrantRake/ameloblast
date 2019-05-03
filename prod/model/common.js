function exchangeSingleItem(fromInv, toInv, item){
  if(fromInv.decrease(item)){
    if( toInv.increase(item) === false ){
      // failed to add, increment original
      fromInv.increase(item);
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
