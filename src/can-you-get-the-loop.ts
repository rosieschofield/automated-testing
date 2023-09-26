export function incrementString(strng: string): string {
  let indexOfNum = strng.search(/[0-9]/);
  if (indexOfNum === -1) {
    return strng + 1;
  } else {
    let i = strng.length - 1;
    let num = parseInt(strng[i]);
    let zeroCount = 0;
    while (num === 9) {
      i--;
      num = parseInt(strng[i]);
      zeroCount++;
    }
    return strng.slice(0, i) + num++ + "0".repeat(zeroCount);
  }
}

//let i=indexOfNum
//while (strng[i] === "0" && strng[i++]=== "0"){
//i++
//}
// let i = strng.length-1
// let lastNum = parseInt(strng[i])
// let penNum = parseInt(strng[i-1])
// if (lastNum<9){
//     return strng.slice(0,i) + lastNum++
// } else{
//     if (penNum<9){
//     return strng.slice(0,i-1) + penNum++ +"0"
//     } else{

//     }
// }
// while(strng[i])
//let num = parseInt(strng.slice(i))
//return strng.slice(0,indexOfNum) + num++
