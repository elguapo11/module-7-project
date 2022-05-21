function addtoZero (arr, target) {
    let constant = 0; 
    for (let i = 0; i < arr.length; i++){
        if (arr [i] + constant === 0)
        console.log('true')
    }
}

myArray = [0, -2, 1, 2, 3, 4]

addtoZero(myArray)