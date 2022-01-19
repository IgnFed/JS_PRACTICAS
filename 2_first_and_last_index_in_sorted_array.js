const arr = [1,2,3,4,5,6,8,9,5]; // Expected output [ 4 , 8 ]
const target = 5;

//Solution 1
function firstAndLastIndex_V1(tgt=0, arr=[]){
  return [arr.indexOf(tgt), arr.lastIndexOf(tgt)];
}

console.log(firstAndLastIndex_V1(target,arr));

//Solution 2
function firstAndLastIndex_V2(tgt=0, arr=[]){
  //Index's
  let lf = 0, rt = arr.length -1;
  if(arr[lf] === tgt && arr[rt] === tgt) return [lf,rt];
  while(arr[lf] !== tgt || arr[rt] !== tgt){
    if(lf > rt){
      lf = -1;
      rt = -1;
      break;
    }
    if(arr[lf] !== tgt) lf++;
    if(arr[rt] !== tgt) rt--;
  }

  return [lf,rt];
}

console.log(firstAndLastIndex_V2(target,arr));
