function produceDrivingRange(range) {
  return function(a, b){
      let distance = parseInt(b) - parseInt(a);
      let diff = range - distance;
      if( diff > 0  ) {
        return `within range by ${value}`;
      }
      else{
        return `${|value|} blocks out of range`;
      }
    }
  }
