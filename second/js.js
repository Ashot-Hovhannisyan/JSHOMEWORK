var num = prompt('Please enter  your number'); 

function Prime(num) {
    if (num <= 2)return false;
    for(var i = 2; i < num; i++){
      if (num % i == 0) return false;
    }
    return true;
  }
  
  function PrimeWithin(userinput){
    for(var i = 2; i < userinput; i++){
      if(Prime()){
          alert(i);
      }
    }
  }
  
  PrimeWithin(500);