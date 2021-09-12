
function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)* parseInt(number2);
    question_number="<h4>" + number1 + " X "+ number2 +"</h4>";
input_box= "<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= question_number + input_box + check_button ;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

py1_name=localStorage.getItem("player1_name");
py2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("p1_name").innerHTML=py1_name+" : ";
document.getElementById("p2_name").innerHTML=py2_name+" : ";
document.getElementById("p1_score").innerHTML=player1_score;
document.getElementById("p2_score").innerHTML=player2_score;
document.getElementById("player_q").innerHTML="Question Turn- "+ py1_name;
document.getElementById("player_a").innerHTML="Answer Turn- "+ py2_name;
answer_turn="player2";
question_turn="player1";

function check() {
    get_answer =document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            update_player1_score= player1_score+1;
            document.getElementById("p1_score").innerHTML= update_player1_score;

        }
        else{
            update_player2_score= player2_score+1;
            document.getElementById("p2_score").innerHTML= update_player2_score;

        }
    }

if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("player_q").innerHTML="Question Turn - " + py2_name;
}
else{
    question_turn="player1";
    document.getElementById("player_q").innerHTML="Question Turn - " + py1_name;
}

if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_a").innerHTML="Answer Turn - " + py2_name;
}
else{
    answer_turn="player1";
    document.getElementById("player_a").innerHTML="Answer Turn - " + py1_name;
}

}