// Задача 1

// function compareArrays(arr1, arr2) {

  
//   let result = (arr1.length == arr2.length) && arr1.every((item, index) =>
//     item === arr2[index]); 
//   return result; 
// }
// compareArrays([8, 9], [8, 9])


// // Задача 2

// function advancedFilter(arr) {
//   let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);

//   return resultArr; 
// }

function Myevery(arr1,func)
{
  let res=false;
  for(let i=0;i<arr1.length; i++){
    res=func(arr1[i],i,arr1);
    if(res==false)
    {
      return false;
    }
  }
  return true;
}
function cmp(item,index,arr)
{
if(item==arr2[index])
return false;
else
 return true;
}
let a1=[1,2,3,4];
let arr2=[1,2,3,4];
let res=Myevery(a1,cmp);
console.log(res);
