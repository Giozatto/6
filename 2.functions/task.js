// Задание 1
function getArrayParams(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;

  return { min:min, max:max, avg:avg.toFixed(2) };
}

getArrayParams([-99, 99, 10]);
getArrayParams([1, 2, 3, -100, 10]);

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  return sum;
}
worker([1, 2, 3, 4]);

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {

    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  console.log(max)
  return max;
}
makeWork([[1, 2, 3], [4, 5, 6]], worker);


// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let diff = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
  }
  diff = max - min;
  return diff;
}

worker2([1, 2, 3, 4]);

//worker
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
makeWork(arrOfArr, worker); // 15

arrOfArr = [[10, 10, 11], [20, 10]];
makeWork(arrOfArr, worker); // 31

arrOfArr = [[0, 0, 0], [-1, -100]];
makeWork(arrOfArr, worker); // 0

//worker2
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2); // 30

arrOfArr = [[0, 0, 0], [-1, -99]];
makeWork(arrOfArr, worker2); // 98
