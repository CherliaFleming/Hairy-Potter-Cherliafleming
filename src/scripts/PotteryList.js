import { usePottery } from './PotteryCatalog.js'

export const potteryList = () => {
    const pottery = usePottery()
    const potteryHTML = pottery.map(piece => {
        return `<section class="pottery" id="pottery--${piece.id}">
<h2 class="pottery__shape">${piece.shape}</h2>
<div class="pottery__properties"> Item weighs ${piece.weight} and is ${piece.height} in height </div>
<div class ="pottery__price"> The price is ${piece.price}</div>
</section>`
    }).join("")
    return potteryHTML
}

