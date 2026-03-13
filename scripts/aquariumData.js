export const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/nemo.jpg"
        },
        {
            name: "Sharky",
            species: "Shark",
            length: 15,
            location: "Great Barrier Reef",
            diet: "Carnivore",
            image: "https://example.com/images/sharky.jpg"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/dory.jpg"
        },
        {   
            name: "Bruce",
            species: "Shark",
            length: 15,
            location: "Great Barrier Reef",
            diet: "Carnivore",
            image: "https://example.com/images/bruce.jpg"
        },
        {
            name: "Barry",
            species: "Shark",
            length: 15,
            location: "Great Barrier Reef",
            diet: "Carnivore",
            image: "https://example.com/images/barry.jpg"
        },
        {
            name:"Angel",
            species: "Angel Fish",
            length: 4,
            location: "Great Barrier Reef",
            diet: "Herbivore",
            image: "https://example.com/images/angel.jpg"
        },
        {
            name: "Lord Farquad",
            species: "Guppy",
            length: 2,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/lordfarquad.jpg"
        },
        {
            name: "Beyonce",
            species: "Goldfish",
            length: 1,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/beyonce.jpg"
        },
        {
            name: "Linda",
            species: "Jellyfish",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/bubbles.jpg"
        },
        {
            name: "Mr. Tee",
            species: "Jellyfish",
            length: 5,            
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/mrtee.jpg"   
        },
        {
            name: "Princess",
            species: "Jellyfish",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/bubbles.jpg"
        },
        {
            name: "Nadine",
            species: "Jellyfish",
            length: 5,            
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/mrtee.jpg"   
        },
        {
            name: "Chaka Khan",
            species: "Jellyfish",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/bubbles.jpg"
        },
        {
            name: "The Rock",
            species: "Jellyfish",
            length: 5,            
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/mrtee.jpg"   
        },
        {
            name: "Mr. Incredible",
            species: "Jellyfish",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/bubbles.jpg"            
        },
        {
            name: "Will Ferrell",
            species: "Jellyfish",
            length: 5,            
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/mrtee.jpg"            
        },
        {
            name: "Pochahantas",
            species: "Jellyfish",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/bubbles.jpg"
        }
    ],
    tips: [
        {
        topic: "Water Temperature",
        text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
        }
    ],
    locations: [
        {
        name: "Great Barrier Reef",
        country: "Australia",
        description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
        }
    ]
}
export const mostHolyFish = () => {
    const holyFish = []
    database.fish.forEach(fish => {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    })
    return holyFish
}
export const soldierFish = () => {
    const soldierFish = []
    database.fish.forEach(fish => {
        if (fish.length % 5 === 0) {
            soldierFish.push(fish)}
    })

    return soldierFish
}
export const regularFish = () => {
    database.fish.forEach(fish => {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    })

    return regularFish  
}