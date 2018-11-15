function produceDrivingRange(range) {
  return function(a, b){
    let distance = parseInt(b) - parseInt(a);
    let value = range - distance;
    if( value > 0  ) {
      return `${|}`;
    }
    else
    return false;
  }
}
