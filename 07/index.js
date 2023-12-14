function drawGift (size, symbol) {
  let lines = "";
  const size3D = size * 2

  for (let index = 0; index < size3D - 1; index++) {
    const operationSpaces = size - index - 1
    const spaces = ' '.repeat(Math.max(operationSpaces, 0))
    if (index === 0 || index === size3D - 2) {
      lines +=`${spaces}${'#'.repeat(size)}\n`;
      continue
    }

    const symbolsBefore = symbol.repeat(index - 1);
    const symbolsAfter = symbol.repeat(size3D - index - 3);
    const symbols = index<size ? symbolsBefore : symbolsAfter;
    if (index === size - 1) {
      lines +=`${spaces}${'#'.repeat(size)}${symbols}#\n`;
      continue
    }

    lines +=`${spaces}#${symbol.repeat(size - 2)}#${symbols}#\n`;
  }

  return lines;
}

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/
