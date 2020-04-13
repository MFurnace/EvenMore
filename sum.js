//Write a program that asks the user for a number n and prints the sum of the
//numbers 1 to n
function numberSum(n) {
  let total = 0;
    for(var i = 1; i <= n; i++){
      total += i;
    }
    return total;
}
function run(){
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+numberSum(val)
  }


  <input id="val">
<input type="Submit" onclick="run();">
<p id="results"></p>