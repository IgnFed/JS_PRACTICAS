const S1 = 'salesmen';
const S2 = 'nameless';

// Solution 1
function are_anagrams_V1(S1, S2){
  if(S1.length !== S2.length) return false;
  let m=false;
  for (let char of S1){
    m = S1.length === S2.length &&  S2.includes(char);
    if(!m) break;
  }
  return m;
}
console.log("__V1: ", are_anagrams_V1(S1,S2))

// Solution 2  
function are_anagrams_V2(S1,S2){
  if(S1.length !== S2.length) return false;
  const _S1 = [...S1];
  return S1.length === S2.length && _S1.every((s)=> S2.includes(s));
}

console.log("__V2: ", are_anagrams_V2(S1,S2))

// Solution 3
function are_anagrams_V3(S1,S2){
  if(S1.length !== S2.length) return false;
  const freq1 = {};
  const freq2 = {};
  //Loop for Freq1 && S1
  for (let charS1 of S1){
    if(charS1 in freq1) freq1[charS1] +=1;
    else freq1[charS1] = 1;
  }
  //Loop for Freq2 && S2
  for (let charS2 of S2){
  if(charS2 in freq2) freq2[charS2] +=1;
  else freq2[charS2] = 1;
}
  for (key in freq1){
    if(freq1[key] !== freq2[key] || !key in freq2) return false; 
  }
  return [true, freq1, freq2];
}

console.log("__V3: ", are_anagrams_V3(S1,S2))

// Solution 4
function are_anagrams_V4(...str){
  function sort(){
    return str.map((v)=>[...v]
            .sort()
            .join(''));
  }
  const sortedStr = sort();
  return sortedStr.every((s, idx)=> {
    idx === 0 && idx++;
    return s.length === sortedStr[idx-1].length && s === sortedStr[idx-1];
  })
}

console.log("__V4: ", are_anagrams_V4(S1,S2));
