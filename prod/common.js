function exchangeSingleItem(fromInv, toInv, item){
  if(fromInv.decrease(item)){
    if( toInv.increase(item) === false ){
      // failed to add, increment original
      fromInv.increase(item);
    }
  }
}

function exchangeCountItems(fromInv, toInv, item, count){
  for(let i = 0; i < count; i++){
    if(fromInv.decrease(item)){
      if( toInv.increase(item) === false ){
        // failed to add, increment original
        fromInv.increase(item);
      }
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntInRange(min,max) {
  return Math.floor(Math.random() * Math.floor(max - min + 1)) + Math.floor(min);
}

function formatCitation(entry){
  const cit = new Cite(entry, {
      format: 'string',
      type: 'string',
  });
  const output = cit.get({
      format: 'string',
      type: 'string',
      style: 'citation-apa',
      lang: 'en-US',
  });
  console.log(output);

  return output;
}
