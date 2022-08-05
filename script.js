let x = 2;
let y = 4;

// if (x === y) console.log("x et y sont strictement égaux");
// x = y ? console.log("x est = a z") : console.log("x n'est pas éganl à z");

function d(sup) {
  console.log("le chiffre le plus grand est" + sup);
}

if (x > y) {
  d(x);
} else if (y > x) {
  d(y);
}
