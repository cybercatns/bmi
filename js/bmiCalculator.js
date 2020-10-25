bmiCalc(weight, height);

function bmiCalc(weight, height){
    var heightMeters = height / 100;
    var bmi = weight / (heightMeters*heightMeters);
    // console.log(bmi);

    if(bmi < 18.5){
        console.log("inside ash: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "#707070";
    } else if(bmi >= 18.5 && bmi < 24.9){
        console.log("inside green: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "green";
    } else if(bmi >= 25 && bmi < 29.9){
        console.log("inside yellow: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "yellow";
    } else {
        console.log("inside red: "+bmi);
        document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
        document.getElementById("yourbmi").style.color = "red";
    }
    
    
    // document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
}

