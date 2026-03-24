const database = {
    pottery: [ 
        { id: 1, shape: "mug", weight: 3, height: 2 },
        { id: 2, shape: "dinner plate", weight: 5 , height: 1 },
        { id: 3, shape: "saucer", weight: 3, height: 1, },
        { id: 4, shape: "salad bowl", weight: 3, height: 3 },
        { id: 5, shape: "tea cup", weight: 1, height: 2 }
    ]
};

export const makePottery = (pottery) => {
    return {
        id: pottery.id
        shape: pottery.shape
        weight: pottery.weight
        height: pottery.height 
    }
}
