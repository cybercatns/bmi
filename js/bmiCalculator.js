bmiCalc(weight, height);

function bmiCalc(weight, height){
    var bmi = weight / (height*height);
    console.log(bmi);
    document.getElementById("yourbmi").innerHTML = "Your BMI is: " + "<em>" + bmi + "</em>";
}

