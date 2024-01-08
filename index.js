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
    buttonNumber = 1;
    buttonAnimation(buttonNumber);
    correctAns = 0;
    /*alert("I got clicked");*/
    readAns();
}

function startOver(){
    buttonNumber = 2;
    buttonAnimation(buttonNumber);
    /*alert("Start Over");*/
    reset();
}

function readAns(){
    for (var i = 0; i < numberOfQuest; i++) {
        if (i == 0 && document.querySelectorAll("select")[i].value == "C"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 0 && document.querySelectorAll("select")[i].value != "C"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 1 && document.querySelectorAll("select")[i].value == "I"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 1 && document.querySelectorAll("select")[i].value != "I"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 2 && document.querySelectorAll("select")[i].value == "L"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 2 && document.querySelectorAll("select")[i].value != "L"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 3 && document.querySelectorAll("select")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 3 && document.querySelectorAll("select")[i].value != "J"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 4 && document.querySelectorAll("select")[i].value == "E"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 4 && document.querySelectorAll("select")[i].value != "E"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 5 && document.querySelectorAll("select")[i].value == "G"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 5 && document.querySelectorAll("select")[i].value != "G"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 6 && document.querySelectorAll("select")[i].value == "B"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 6 && document.querySelectorAll("select")[i].value != "B"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 7 && document.querySelectorAll("select")[i].value == "K"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 7 && document.querySelectorAll("select")[i].value != "K"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }

        if (i == 8 && document.querySelectorAll("select")[i].value == "D"){
            correctAns++;
            document.querySelectorAll("select")[i].classList.remove("wrong");
            document.querySelectorAll("select")[i].classList.add("correct");
            document.querySelectorAll("select")[i].disabled = true
        }
        if (i == 8 && document.querySelectorAll("select")[i].value != "D"){
            document.querySelectorAll("select")[i].classList.add("wrong");
        }
    }
    document.querySelectorAll("#textChange")[0].innerText = "Number Correct: " + correctAns;
    /*console.log(correctAns);*/
}

function reset(){
    for (var i = 0; i < numberOfQuest; i++) {
        document.querySelectorAll("select")[i].value = " "
        document.querySelectorAll("select")[i].classList.remove("wrong");
        document.querySelectorAll("select")[i].classList.remove("correct");
        document.querySelectorAll("select")[i].disabled = false
    }

    document.querySelectorAll("#textChange")[0].innerText = "Number Correct:";
}

function buttonAnimation(buttonNumber) {
    /*alert("Button Animation");*/
    console.log(buttonNumber);
    
    var activeButton = document.querySelector("#button" + buttonNumber);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }

