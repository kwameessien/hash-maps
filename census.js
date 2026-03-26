const HashMap = require('./HashMap');

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck', 'Central Park');
birdCensus.assign('monk parakeet', 'Brooklyn');
birdCensus.assign('horned owl', 'Manhattan');
birdCensus.assign('peregrine falcon', 'Bronx');

console.log(birdCensus.retrieve('mandarin duck'));
birdCensus.print('monk parakeet');
birdCensus.print('horned owl');
birdCensus.print('peregrine falcon');