module.exports = function reverse(n) {
  (n < 0) ? n = -n : n = n
  let number = String(n)
  let i = number.length - 1
  let num = ''
  while (i >= 0) {
    num += number[i]
    i --
  }
  
  return num
}
