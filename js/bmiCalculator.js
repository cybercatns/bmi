$(".calcbtn").on("click", function() {

    var weight = $("#weightInput").val();
    var height = $("#heightInput").val();
    
    console.log("weightInput is: "+ weight);
    console.log("heightInput is: "+ height);

    var heightMeters = height / 100;
    var bmi = weight / (heightMeters*heightMeters);

    $(".alert").css("border", "0rem");

    if(weight == "" || height == ""){
        $("#yourbmi").html("Fail");
    } else{
        if(bmi < 18.5){
            console.log("inside ash: "+bmi);
            $("#yourbmi").html(bmi.toFixed(1));
            $("#yourbmi").css("color", "#707070");
            $(".Underweight").css("border", "dotted");
            $(".Underweight").css("borderWidth", "0.5rem");
    
        } else if(bmi >= 18.5 && bmi < 24.9){
            console.log("inside green: "+bmi);
            $("#yourbmi").html(bmi.toFixed(1));
            $("#yourbmi").css("color", "green");
            $(".Normal").css("border", "dotted");
            $(".Normal").css("borderWidth", "0.5rem");
    
        } else if(bmi >= 25 && bmi < 29.9){
            console.log("inside yellow: "+bmi);
            $("#yourbmi").html(bmi.toFixed(1));
            $("#yourbmi").css("color", "yellow");
            $(".Overweight").css("border", "dotted");
            $(".Overweight").css("borderWidth", "0.5rem");
        } else {
            console.log("inside red: "+bmi);
            $("#yourbmi").html(bmi.toFixed(1));
            $("#yourbmi").css("color", "red");
            $(".Obesity").css("border", "dotted");
            $(".Obesity").css("borderWidth", "0.5rem");
        }
    }    
  });



