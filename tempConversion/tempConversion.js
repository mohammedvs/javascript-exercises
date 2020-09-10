const ftoc = function(fahr) {
  let cels = Math.round((fahr - 32) * (5/9) * 10) / 10;

  return cels;

}

const ctof = function(cels) {
  let fahr = Math.round(((cels * 9/5) + 32) * 10) / 10;

  return fahr;

}

module.exports = {
  ftoc,
  ctof
}
