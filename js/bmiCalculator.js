bmiCalc(weight, height);

function bmiCalc(weight, height){
    var heightMeters = height / 100;
    var bmi = weight / (heightMeters*heightMeters);
    console.log(bmi);
    document.getElementById("yourbmi").innerHTML = bmi.toFixed(1);
}

