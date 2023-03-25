p1name = localStorage.getItem("player1_name");
p2name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = p1name + " : ";
document.getElementById("player2_name").innerHTML = p2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("pq").innerHTML =  "Question Turn -" + p1name;
document.getElementById("pa").innerHTML =  "Answer Turn -" + p2name;




function send() 
{
    number1=document.getElementById("word").value;
    number2=document.getElementById("word2").value;
    word = parseInt(number1) * parseInt(number2);
    //gw = document.getElementById("word").value;
    //word = gw.toLowerCase();
    //console.log("word in lowercase = " + word);

    //c1 = word.charAt(1);

    //ld2= Math.floor(word.length/2);
    //c2 = word.charAt(ld2);


    //world = word.length - 1;
    //c3 = word.charAt(world);

    //detc1 = word.replace(c1,"_");
    //detc2 = detc1.replace(c2,"_");
    //detc3 = detc2.replace(c3,"_");

    qw = "<h4 id='word_display'> Q. "+number1+"*"+number2+"</h4>";
    ib = "<br>Answer <input type='text' id='input_check_box'>";
    cek= "<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row = qw +ib + cek ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

var question_turn = "player1";
var answer_turn = "player2";

function check()
{
    ga = document.getElementById("input_check_box").value;
    answer = ga.toLowerCase();
    console.log("answer in lower case -" + answer);
    if(answer == word)
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("pq").innerHTML = "Question_Turn - " + p2name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("pq").innerHTML = "Question Turn - " + p1name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("pa").innerHTML = "Answer_Turn - " + p2name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("pa").innerHTML = "Answer Turn - " + p1name;
    }
    document.getElementById("output").innerHTML = "";
}