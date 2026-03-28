// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'




// Make 5 pieces of pottery at the wheel
const piece = makePottery()

console.log(makePottery(database.pottery.[0]))


// Fire each piece of pottery in the kiln
console.log(firePottery(database.pottery[0],2300))

// Determine which ones should be sold, and their price
console.log(toSellOrNotToSell(database.pottery[0]))
console.log(toSellOrNotToSell(database.pottery[1]))
console.log(toSellOrNotToSell(database.pottery[2]))
console.log(toSellOrNotToSell(database.pottery[3]))
console.log(toSellOrNotToSell(database.pottery[4]))






// Invoke the component function that renders the HTML list

