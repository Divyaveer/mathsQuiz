player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;


function send(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    inputBox = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='check_btn btn btn-info' onclick='check();'>Check</button>";
    row = question_number + inputBox + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

//check()................................
function check() {
    let input_check_box=document.getElementById('input_check_box').value;

    if(input_check_box == actual_answer){

        if(answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        alert("Correct Answer");

    }else{
        
        if(answer_turn == "player1"){
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }else{
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        
        if(answer_turn == "player1"){
            alert("Wrong Answe! " + player1_name + ", you lost 1 point...");
        }

    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
