window.onload = function(){

  var stringInput = "I am a javascript developer";
  var stringOutput = "";

  var result = stringInput.split(" ").forEach(myFunction);

  function myFunction(item, index) {
    if(stringOutput.length > 0){
      stringOutput += " ";
    }

    for(var i=item.length - 1;i>-1; i--){
      stringOutput += item[i];
    }
  }

  document.getElementById("reversed").innerHTML = stringOutput;

}
