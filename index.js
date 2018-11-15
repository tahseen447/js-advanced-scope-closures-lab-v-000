function produceDrivingRange(range) {
  return function(a, b){
    let distance = parseInt(b) - parseInt(a);
    if( range - distance > 0  ) {
      return true;
    }
    else
    return false;
  }
}
