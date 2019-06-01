
//variables for storing the timeout functions
let redTimeOut;
let yellowTimeOut;
let greenTimeOut;

//track the current light that is on
let currentLight;

//variable to access the resumeLights function inside window.onload's scope
 let startLights;

 //stop the lights
    function stopTheLights(){
    clearTimeout(redTimeOut);
    clearTimeout(yellowTimeOut);
    clearTimeout(greenTimeOut);
    }

window.onload = function() {

    //get the light bulb elements
    let redLight = document.getElementById('redLight');
    let yellowLight = document.getElementById('yellowLight');
    let greenLight = document.getElementById('greenLight');

    //switch on with SetTimeout
    function switchOnRed(){
        redTimeOut = setTimeout(function(){redOn()},3000);
    }
    function switchOnYellow(){
         yellowTimeOut = setTimeout(function(){yellowOn()},3000);
    }
    function switchOnGreen(){
        greenTimeOut = setTimeout(function(){greenOn()},3000);
    }


//**the functions turn on themselves recursively

    //turn on red
    function redOn(){
        redLight.style.backgroundColor = "red";
        yellowLight.style.backgroundColor = "black";
        greenLight.style.backgroundColor = "black";
        currentLight = "red";
        switchOnYellow();

    }

    //turn on yellow
    function yellowOn(){
        redLight.style.backgroundColor = "black";
        yellowLight.style.backgroundColor = "yellow";
        greenLight.style.backgroundColor = "black";
        currentLight = "yellow";
        switchOnGreen();
    }

    //turn on green
    function greenOn(){
        redLight.style.backgroundColor = "black";
        yellowLight.style.backgroundColor = "black";
        greenLight.style.backgroundColor = "green";
        currentLight = "green";
        switchOnRed();
    }
    //invokes the function to start the loop
    redOn();

    //returns the function to a variable to start the lights from the last place they stopped
     startLights = function(){
        if(currentLight === "red"){
            return redOn();
        }
        else if(currentLight === "yellow"){
            return yellowOn();
        }
        else if(currentLight === "green"){
            return greenOn();
        }
    }

};

