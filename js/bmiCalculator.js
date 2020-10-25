bmiCalc(weight, height);

function bmiCalc(weight, height){
    var heightMeters = height / 100;
    var bmi = weight / (heightMeters*heightMeters);

    var arr = document.getElementsByClassName("alert");

    for(var i=0; i < arr.length; i++){
        document.getElementsByClassName("alert")[i].style.border="0rem";
    }

    if(bmi < 18.5){
        console.log("inside ash: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "#707070";
        document.getElementsByClassName("Underweight")[0].style.border = "dotted";
        document.getElementsByClassName("Underweight")[0].style.borderWidth = "0.5rem";
    } else if(bmi >= 18.5 && bmi < 24.9){
        console.log("inside green: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "green";
        document.getElementsByClassName("Normal")[0].style.border = "dotted";
        document.getElementsByClassName("Normal")[0].style.borderWidth = "0.5rem";
    } else if(bmi >= 25 && bmi < 29.9){
        console.log("inside yellow: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "yellow";
        document.getElementsByClassName("Overweight")[0].style.border = "dotted";
        document.getElementsByClassName("Overweight")[0].style.borderWidth = "0.5rem";
    } else {
        console.log("inside red: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "red";
        document.getElementsByClassName("Obesity")[0].style.border = "dotted";
        document.getElementsByClassName("Obesity")[0].style.borderWidth = "0.5rem";
    }
    
    
    // document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
}

