const btn = document.querySelector('button');
const main = document.querySelector('main');

btn.addEventListener('click', function palcheck(){
  var word = document.getElementById('word').value;
  // console.log(word);
  var revword = "";
  for(let i = word.length-1; i >= 0; i--){
    revword += word[i];
  }
  // console.log(revword);
  if( word === revword){
    console.log(true);
    document.body.style.backgroundColor = '#00FF00';
  } else {
    console.log(false);
    document.body.style.backgroundColor = '#FF0000'
  }

})