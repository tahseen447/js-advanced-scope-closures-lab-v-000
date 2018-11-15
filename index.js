function produceDrivingRange(range) {
  return function(a, b){
    let distance = b - a;
    if( range - distance > 0  ) {
      return true;
    }
    else 
    return false;
  }
}
