import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './aquariumData.js'



const fishContainer = document.querySelector('#fishList')
const tipContainer = document.querySelector('#tipList')
const locationContainer = document.querySelector('#locationList')


const fishHTML = fishList()        
const tipHTML = tipList()          
const locationHTML = locationList() 

fishContainer.appendChild(fishHTML)      
tipContainer.appendChild(tipHTML)        
locationContainer.appendChild(locationHTML) 

