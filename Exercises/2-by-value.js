'use strict';

const inc = (n)=>{n++;return n;}

const a = 0, b = inc(a);

console.log({a, b});

module.exports = { inc };
