// const btn = document.querySelector('btn');
// const main = document.querySelector('main');
// const results = document.querySelector('result');


// btn.addEventListener('click', palcheck);

// function palcheck(){
//   const word = document.querySelector('input-text').value;
//   var revword = reversedWord(word);
//   console.log(revword)
//   if( word.value === revword){
//   //   changeBackground(true,word);
//     console.log(word)
//     results.innerHTML = `${word} is a palindrome`;
//   } else {
  //   changeBackground(false,word);
  //   // results.innerHTML = "is not a palindrome";
  // console.log(word.value)
  // }

// }

// function reversedWord (word){
//   let reverse = ""
//   for(let i = word.length-1; i >= 0; i--){
//     reverse += word[i];
//   }
//   return reverse;
// }
// function changeBackground(x,word){
//   if(x){
//     document.body.style.backgroundColor = '#00FF00';
//     results.innerHTML = `${word} is a palindrome`;
//   } else {
//     document.body.style.backgroundColor = '#FF0000';
//     results.innerHTML = `${word} is a palindrome`;

//   }
// }

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

// madam
// noon
function palindrome() {
  const word = document.querySelector(".input-text").value;
  let len = word.length;

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

  // let flip = end.split("").reverse().join("");

  let flip = [...end].reverse().join("");
  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`;
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  }
  // alert(flip);
}
