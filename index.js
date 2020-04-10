
function a()
{
    alert;
}
a()
alert("Привет");



function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(2,1))

//   function cube(a){
//     return Math.pow(a, 3);
//   }


  function average(a,b){
  return((a+b)/2)
  }
  console.log(average(5,7))


  function sumThree(a,b,c){
      return(a+b+c || a+b || a+c || b+c)
        return(a||o + b|| 0 + c||0)
  }
  console.log(sumThree(2,9))

var a =prompt("Введите первое число")
var b =prompt("Введите второе число")

function intRandom(a,b) {
    a = Math.ceil(a)
    b = Math.floor(b)
    if(!b){
        return Math.round (Math.random()*(0-a))+a
    }
    else{
        return Math.round (Math.random()*(b-a))+a
    }
  }
alert(intRandom(a,b))
  
   function sum (){
       var suma = 0
       for (var i=0;i<arguments.length;i++){
       suma +=arguments[i]
   }
   alert(suma)
}
sum(1,2)
sum(5,7,1,5)