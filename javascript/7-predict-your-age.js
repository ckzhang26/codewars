function predictAge(...args){
    return Math.floor( (Math.sqrt( args.reduce((a, b) => a + (b * b), 0) )) / 2 );
  }