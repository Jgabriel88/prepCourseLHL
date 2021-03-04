
let msg = ''
function laugh(num) {
  for (let x = 0; x < num; x++) {
    msg = msg + 'ha'
  }
  msg = msg + '!'
  return msg;

}
console.log(laugh(10))