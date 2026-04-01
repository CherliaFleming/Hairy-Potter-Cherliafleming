// Imports go first
import { makePottery, database } from './PotteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'





// Make 5 pieces of pottery at the wheel
const piece1 = makePottery(database.pottery[0])
const piece2 = makePottery(database.pottery[1])
const piece3 = makePottery(database.pottery[2])
const piece4 = makePottery(database.pottery[3])
const piece5 = makePottery(database.pottery[4])



// Fire each piece of pottery in the kiln
const fired1 = firePottery(piece1, 2300)
const fired2 = firePottery(piece2, 2600)
const fired3 = firePottery(piece3, 2100)
const fired4 = firePottery(piece4, 2000)
const fired5 = firePottery(piece5, 1900)


// Determine which ones should be sold, and their price
toSellOrNotToSell(fired1)
toSellOrNotToSell(fired2)
toSellOrNotToSell(fired3)
toSellOrNotToSell(fired4)
toSellOrNotToSell(fired5)










// Invoke the component function that renders the HTML list
document.querySelector(".potteryList").innerHTML = potteryList()
