function greet() {
    alert('hey boy');
}
greet();
greet();

//inner variable //

function greet() {
    let test = "js is best";
    console.log('you know' + test);
}
greet();
 

//outer variable//
 let game = "football";
  function play() {
  let result = 'i love ' + game;
  console.log(result);
    
}
play();