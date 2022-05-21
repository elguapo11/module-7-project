// 1. Sum Zero 

function addtoZero(sum, array) {
    for (i=0; i<array.length; i++) {
      for (j=0; j<array.length; j++) {
        if (i == j) continue;
        else if (array[i] + array[j] === sum) return true;
      }
    }; return false;
  }
  
  
  let sum = 0;
  let array = [3, 5, 7, 9, 4, 8, 5, 12, 4, 9, 16, 5]
  
  console.log(addtoZero(sum, array)); 

// 2. Unique Characters
function uniqueCharacters(str) {
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] === str[j]) {
                console.log("false")
                return
            }
                else {
                    console.log("true")
                }
}

uniqueCharacters('beny')

//3. panagram sentence// 

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0) {
        console.log("false")
      }
    else {
    console.log("true")
    }}
}

  isPangram('g')


//   4) Longest Word
  
  function longestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    console.log(longestWord)
  }
  longestWord("The quick brown fox jumped over the lazy dog");