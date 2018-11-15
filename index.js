function produceDrivingRange(range) {
  return function(a, b){
      let distance = parseInt(b) - parseInt(a);
      let diff = Math.abs(range - distance);
      if( diff > 0  ) {
        return `within range by ${diff}`;
      }
      else{
        return `${|diff|} blocks out of range`;
      }
    }
  }
