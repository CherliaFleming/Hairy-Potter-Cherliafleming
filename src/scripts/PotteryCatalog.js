const catalog = []

export const toSellOrNotToSell = (pottery) => {

    if (pottery.cracked) {
        pottery.price = 2.50 
    }
    if (pottery.weight >=6) {
        pottery.price = 40 
    }
     else if (pottery.weight < 6) {
        pottery.price = 20 
    }
    catalog.push(pottery)
    return pottery
}

export const usePottery = () => {
return structuredClone(catalog)
} 