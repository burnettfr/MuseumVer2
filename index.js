numberOfQuest = document.querySelectorAll("input").length;
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
        if (i == 0 && document.querySelectorAll("input")[i].value == "C"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 0 && document.querySelectorAll("input")[i].value != "C"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 1 && document.querySelectorAll("input")[i].value == "I"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 1 && document.querySelectorAll("input")[i].value != "I"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 2 && document.querySelectorAll("input")[i].value == "L"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 2 && document.querySelectorAll("input")[i].value != "L"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 3 && document.querySelectorAll("input")[i].value == "J"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 3 && document.querySelectorAll("input")[i].value != "J"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 4 && document.querySelectorAll("input")[i].value == "E"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 4 && document.querySelectorAll("input")[i].value != "E"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 5 && document.querySelectorAll("input")[i].value == "G"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 5 && document.querySelectorAll("input")[i].value != "G"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 6 && document.querySelectorAll("input")[i].value == "B"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 6 && document.querySelectorAll("input")[i].value != "B"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 7 && document.querySelectorAll("input")[i].value == "K"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 7 && document.querySelectorAll("input")[i].value != "K"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }

        if (i == 8 && document.querySelectorAll("input")[i].value == "D"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 8 && document.querySelectorAll("input")[i].value != "D"){
            document.querySelectorAll("input")[i].classList.add("wrong");
        }
    }
    document.querySelectorAll("#textChange")[0].innerText = "Number Correct: " + correctAns;
    inCorrectAns = 9 - correctAns;
    /*console.log(correctAns);*/

    

    var myWindow = window.open("", "", "width=500,height=500, top=400, left=400");

    myWindow.document.write("<style>html{background-color: green}</style>");
    // myWindow.document.write("<style>h1{text-align: center}</style>");

    myWindow.document.write("<h1 style = 'text-align: center'>Good News</h1>");
    myWindow.document.write("<h1 style = 'text-align: center'>Lots of Opportunity to Improve</h1>");
    myWindow.document.write("<h1 style = 'text-align: center; font-size: 10rem; margin: 0px'>&#128169</h1>");
    myWindow.document.write("<h1 style = 'text-align: center; margin-top: 40px'>Number Correct: ");
    myWindow.document.write(correctAns);
    myWindow.document.write("</h1>");
    myWindow.document.write("<h1 style = 'text-align: center'>Number Incorrect: ");
    myWindow.document.write(inCorrectAns);
    myWindow.document.write("</h1>");
    
    // var myWindow = window.open("popup1.html", "", "width=400,height=400, top=400, left=400");
    // myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}

function reset(){
    for (var i = 0; i < numberOfQuest; i++) {
        document.querySelectorAll("input")[i].value = " "
        document.querySelectorAll("input")[i].classList.remove("wrong");
        document.querySelectorAll("input")[i].classList.remove("correct");
        document.querySelectorAll("input")[i].disabled = false
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

