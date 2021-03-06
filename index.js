function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){
    let distanceToTravel = parseInt(endingBlock) - parseInt(startingBlock);
    let difference = blockRange - distanceToTravel;
    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return (fare * percent);
  }
}


function createDriver(){
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
