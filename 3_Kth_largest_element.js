const kth = 5;

// Solution 1
function kth_largest_V1(kth=0, arr=[]){
  const kth_largest_arr = [];
  function kth_largest_recursive(kthModified, modifiedArr){
    if(kthModified === 0) return;
    const maxNum = Math.max(...modifiedArr);
    modifiedArr.splice(modifiedArr.indexOf(maxNum), 1);
    kth_largest_arr.push(maxNum);
    return kth_largest_recursive(--kthModified, modifiedArr );
  }

  if(kth === 0 || !arr.length) return arr;
  kth_largest_recursive(kth, arr);
  return kth_largest_arr;
}

let arr = [6,1,7,2,81,23,76,9,2]; // Expected output: [ 87, 9, 9, 7 ]
console.log(`__V1: [${kth_largest_V1(kth, arr)}]`);


// Solution 2
function kth_largest_V2(kth=0, arr=[]){
  
  while(arr.length > kth) arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.sort((a,b)=> b-a);
}
arr = [6,1,7,2,81,23,76,9,2]; 
console.log(`__V2: [${kth_largest_V2(5, arr) }]`);


