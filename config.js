var seedRandom = require('seed-random');
var palettes = require('./lib/color-palettes.json');
var createRandomRange = require('./lib/random-range');
var countColor = 0;
module.exports = function (seed) {
  if (typeof seed === 'undefined') {
    seed = String(Math.floor(Math.random() * 1000000));
  }

  //console.log('Seed:', seed);

  var randomFunc = seedRandom(seed);
  var random = createRandomRange(randomFunc);

  var maps = [
    '1.png',
    '2.png',
    'renobin44.png',
    'abs.jpg',
    'sym6.jpg', 
    'sym3.jpg',
    'scifi.jpg', 'nature1.jpg',
    'map7.jpg', 'geo5.jpg', 'geo4.jpg',
    'geo3.jpg', 'geo1.jpg', 'fractal2.jpg',
    'fractal1.jpg', 'eye.jpg', 'city5.jpg',
    'city2.jpg', 'church2.jpg', 'architecture.jpg',
    'pat1.jpg'
  ].map(function (p) {
    return 'maps/' + p;
  });
  
 
  //var mapSrc = maps[Math.floor(random(maps.length))];
  //var mapSrc = maps[(4 + Math.floor(random(3)))];
  var mapSrc = maps[2];

  return {
    // rendering options
    random: randomFunc,
    seedName: seed,
    pointilism: random(0, 0.2),
    noiseScalar: [ random(0.000001, 0.000001), random(0.0002, 0.004) ],
    globalAlpha: 0.5,
    startArea: random(0.0, 1.5),
    maxRadius: random(50, 100),
    lineStyle: random(1) > 0.5 ? 'round' : 'square',
    interval: random(0.001, 0.01),
    count: Math.floor(random(10, 1000)),
    steps: Math.floor(random(800, 1800)),
    endlessBrowser: false, // Whether to endlessly step in browser
  
    // background image that drives the algorithm
    debugLuma: false,
    backgroundScale: 0.5,
    backgorundFile: 'black',
    backgroundSrc: mapSrc,

    // browser/node options
    pixelRatio: 1,
    width: 1280 * 2,
    height: 720 * 2,
    palette: getPalette(),

    // node only options
    asVideoFrames: false,
    filename: 'render',
    outputDir: 'output'
  };
// //var countColor=1;
  function getPalette () {
    var countColor = Math.floor(random() * palettes.length);
    //ntColor += 1;
    //console.log(countColor);
    var paletteColors = palettes[countColor];

    return arrayShuffle(paletteColors);
  }


  // function getPalette () {
  //   console.log(countColor+1);
  //   var paletteColors = palettes[countColor];
  //   countColor+=1;
  //   return paletteColors;
  //   //return arrayShuffle(paletteColors);
  // }

  function arrayShuffle (arr) {
    var rand;
    var tmp;
    var len = arr.length;
    var ret = arr.slice();

    while (len) {
      rand = Math.floor(random(1) * len--);
      tmp = ret[len];
      ret[len] = ret[rand];
      ret[rand] = tmp;
    }

    return ret;
  }
};
