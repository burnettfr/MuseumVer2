numberOfQuest = document.querySelectorAll("select").length;
var answers = [];
correctAns = 0;
/*console.log(numberOfQuest);
console.log(document.querySelectorAll("select")[0].name);
console.log(document.querySelectorAll("select")[0].value);
*/

document.querySelector("#button1").addEventListener("click", handleClick);

document.querySelector("#button2").addEventListener("click", startOver);

function handleClick(){
    correctAns = 0;
    /*alert("I got clicked");*/
    readAns();
}

function startOver(){
    /*alert("Start Over");*/
    reset();
}

function readAns(){
    for (var i = 0; i < numberOfQuest; i++) {
        if (i == 0 && document.querySelectorAll("select")[i].value == "C"){
            correctAns++;
        }

        if (i == 1 && document.querySelectorAll("select")[i].value == "I"){
            correctAns++;
        }

        if (i == 2 && document.querySelectorAll("select")[i].value == "L"){
            correctAns++;
        }

        if (i == 3 && document.querySelectorAll("select")[i].value == "J"){
            correctAns++;
        }

        if (i == 4 && document.querySelectorAll("select")[i].value == "E"){
            correctAns++;
        }

        if (i == 5 && document.querySelectorAll("select")[i].value == "G"){
            correctAns++;
        }

        if (i == 6 && document.querySelectorAll("select")[i].value == "B"){
            correctAns++;
        }

        if (i == 7 && document.querySelectorAll("select")[i].value == "K"){
            correctAns++;
        }

        if (i == 8 && document.querySelectorAll("select")[i].value == "D"){
            correctAns++;
        }
    }
    document.querySelectorAll("#textChange")[0].innerText = "Number Correct: " + correctAns;
    console.log(correctAns);
}

function reset(){
    for (var i = 0; i < numberOfQuest; i++) {
        document.querySelectorAll("select")[i].value = " "
    }

    document.querySelectorAll("#textChange")[0].innerText = "Number Correct:";
}
