const myArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
function randomArrayElement(array){
    return array[Math.floor(Math.random() * array.length)]
}

console.log(randomArrayElement(myArray));
