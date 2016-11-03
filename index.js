function theBeatlesPlay(arr_1, arr_2){
  let final_array = []
  for(let i = 0; i < arr_1.length; i++){
    final_array.push(`${arr_1[i]} plays ${arr_2[i]}`)
  }
  return final_array
}

function johnLennonFacts(array){
  for(let i = 0; i < array.length; i++){
    array[i] += "!!!"
  }
  return array
}

function iLoveTheBeatles(n){
  let arr = []
  do{
    arr.push("I love the Beatles!")
    n++
  }while(n < 15)
  return arr
}
