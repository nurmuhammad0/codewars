function positiveSum(arr) {
    let sum=0;
     for(let i=0;i<arr.length;i++){
         if(arr[i]>0){
             sum+=arr[i];
 
         }
 
     }
 console.log(sum);
 }
 return positiveSum([1,-2,0.2,4,5]);