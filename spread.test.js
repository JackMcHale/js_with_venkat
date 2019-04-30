'use strict'
const presidents = ['Abe', 'Thomas', 'Ulysses'];
const elDestructo = function(namer, namest)
{
    process.stdout.write([namer.toUpperCase(),namest.repeat(2)].toString());
}

elDestructo(...presidents);