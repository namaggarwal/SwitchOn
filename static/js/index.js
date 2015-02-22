var home = (function(){

	var info = function (msg) {
      document.getElementById("info").innerHTML = msg;
    };
    var res = function (msg) {
      document.getElementById("res").innerHTML = msg;
    };
    var error = function (msg) {
      document.getElementById("error").innerHTML = msg;
    };

	var addEvents = function(){


	  var mic = new Wit.Microphone(document.getElementById("microphone"));
     
      mic.onready = function () {
        info("Microphone is ready to record");
      };
      mic.onaudiostart = function () {
      	res("");
        info("Recording started");
        error("");
      };
      mic.onaudioend = function () {
        info("Recording stopped, processing started");
      };
      mic.onresult = function (intent, entities) {
      		
      		switch(intent){

      			case "turn_on_the_lights":
      				res("Turning on the lights");
      				makeRequest(1);
      				break;
      			case "turn_off_the_lights":
      				res("Turning off the lights");
      				makeRequest(0);
      				break;
      		}


      };
      mic.onerror = function (err) {
        error("Error: " + err);
      };
      mic.onconnecting = function () {
        info("Microphone is connecting");
      };
      mic.ondisconnected = function () {
        info("Microphone is not connected");
      };

      mic.connect("DXNXCS5CWA6AHUHFOEBAHV6IAKM53DZ7");
      
	}

	var makeRequest = function(opt){

		var xmlhttp;
		
		xmlhttp=new XMLHttpRequest();
		xmlhttp.onreadystatechange=function(){

			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				
				if(opt == 1){

					res("Lights turned on successfully");
				}else{
					res("Lights turned off successfully");
				}
		    	
		    }
		  }
		xmlhttp.open("POST","/lights",true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send("action="+opt);

	}

	var init = function(){

		addEvents();
	}

	return {

		init:init
	};

})();

window.onload = function(){

	home.init();
}

