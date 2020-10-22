module.exports = function reverse (n) {
  let num = Math.abs(n);
  let hun = Math.trunc(num/100);
  let dec = Math.trunc(num/10) % 10;
  let ed = num % 10;
  return hun + dec * 10 + ed * 100;
}
