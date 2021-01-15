let Qoa = require('../src/qoa');
Qoa = new Qoa;

let ops = {
  type: 'multiple',
  query: 'What is your favorite treat?',
  handle: 'treat',
  symbol: '>',
  menu: [
    'Chocolate',
    'Cupcakes',
    'Ice-Cream'
  ]
};

Qoa.prompt([ops]).then(console.log);

Qoa.multiple(ops).then(console.log);

// press 'space' to select
// > (●) Chocolate
//   ( ) Cupcakes
//   ( ) Ice-Cream

// => { treat: [Chocolate] }
