function check(){
    var score = 0;
    var ansright = document.getElementById("quesans1");
    var w2ans = document.getElementById("quesans2");
    var w3ans = document.getElementById("quesans3");
    var w4ans = document.getElementById("quesans4");
if (ansright.checked == true) {
    score++
} else{
    score
}

    var w7ans = document.getElementById("quesans5");
    var w6ans = document.getElementById("quesans6");
    var ansright2 = document.getElementById("quesans7");
    var w8ans = document.getElementById("quesans8");
if (ansright2.checked == true) {
    score++
} else{
    score
}


var w7ans = document.getElementById("quesans9");
var w6ans = document.getElementById("quesans10");
var ansright3 = document.getElementById("quesans11");
var w8ans = document.getElementById("quesans12");
if (ansright3.checked == true) {
score++
} else{
    score
}



var ansright4 = document.getElementById("quesans13");
var w6ans = document.getElementById("quesans14");
var w7ans = document.getElementById("quesans15");
var w8ans = document.getElementById("quesans16");
if (ansright4.checked == true) {
score++
} else{
    score
}
alert("your score is " + score++)

}


