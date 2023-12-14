function maxDistance (movements) {
  let movementsTotals = 0
  const movementBase = {
    '>': 1,
    '<': -1
  }

  let counter = 0

  for (const movement of movements) {
    const movementValue = movementBase[movement]
    if (movementBase[movement]) {
      movementsTotals += movementValue
      continue;
    }
    counter++
  }

  const total = Math.abs(movementsTotals) + counter
  return total
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements1 = '>>*<<<*'
const result1 = maxDistance(movements1)
console.log(result1) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
