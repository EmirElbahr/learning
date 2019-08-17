 
  		function getValue() {

  			var text = document.getElementById('ip').value;
  			var patt = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?)$/g;
  			if (patt.test(text)) check.innerHTML = ip.value;
  			  				else check.innerHTML = "incorrect";

}


   
  
   