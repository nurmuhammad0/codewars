
// function min(list){
//     var min =list[0];
//     for(var i=0; i<list.length; i++){
//        var cur = list[i];
//        if (cur<min) min=cur;
//     }
//     return min;
// }
// console.log(min([4,6,2,1,9,63,-134,566]));

// function max(list){
//     var max =list[0];
//     for(var i=0; i<list.length; i++){
//        var cur = list[i];
//        if (cur>max) max=cur;
//     }
//     return max;
// }
// console.log(max([4,6,2,1,9,63,-134,566]));



// function invert(array) {
//     for(let i=0; i<array.length; i++){
//       array[i] *= -1;
//     }
//      return array;
//   }
//   console.log(invert([1,2,3,4,5]));


function saleHotdogs(n){
    return n*(n<5?100:n<10?95:90);
  }
  console.log(saleHotdogs(3));