let side = 10;
let diagonal = 20
diagonal > side ? Math.round(((side * Math.sqrt(diagonal**2 - side**2)) * 100) / 100) : 'not a rectangle';
console.log(Math.round(((side * Math.sqrt(diagonal**2 - side**2)) * 100)) / 100);
console.log(((side * Math.sqrt(diagonal**2 - side**2)) * 100) / 100);