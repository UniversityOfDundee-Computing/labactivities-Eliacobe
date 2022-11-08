document.getElementById("5%").addEventListener("click", five);
document.getElementById("10%").addEventListener("click", ten);
document.getElementById("15%").addEventListener("click", fifteen);
document.getElementById("custom").addEventListener("click", custom);


function five(){
  let billValue = document.getElementById("input").value;
  document.getElementById("outPut").innerHTML = "£" + billValue*0.05;
}

function ten(){
  let billValue = document.getElementById("input").value;
  document.getElementById("outPut").innerHTML = "£" + billValue*0.1;
}


function fifteen(){
  let billValue = document.getElementById("input").value;
  document.getElementById("outPut").innerHTML = "£" + billValue*0.15;
}

function custom(){
  let billValue = document.getElementById("input").value;
  per = billValue*0.25;
  twopound = billValue*0.1 + 2.00;
  if(per>twopound){
    document.getElementById("outPut").innerHTML = "£" + per;
  }
  else{
    document.getElementById("outPut").innerHTML = "£" + twopound;
  }
}
