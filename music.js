numberOfQuest = document.querySelectorAll("input").length;
numberOfButtons = document.querySelectorAll("button").length;
var answers = [];
correctAns = 0;
// console.log(numberOfButtons);
// console.log(document.querySelectorAll("select")[0].name);
// console.log(document.querySelectorAll("select")[0].value);


for (var i = 0; i < numberOfButtons - 2; i = i +2) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // console.log(document.querySelectorAll("button")[i].innerText);
        var buttonId = this.id;
        songClick(buttonId);
    });
}

for (var i = 1; i < numberOfButtons - 2; i = i +2) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        // console.log(document.querySelectorAll("button")[i].innerText);
        var buttonId = this.id;
        // pauseClick(buttonId);
    });
}

document.querySelector("#button1").addEventListener("click", handleClick);

document.querySelector("#button2").addEventListener("click", startOver);

function songClick(id){
    console.log(id);
    buttonAnimation2(id);

    switch (id) {
        case "song1":
          var snip1 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
          snip1.play();

          document.querySelector("#song1p").addEventListener("click", function(){
            // console.log(document.querySelectorAll("button")[i].innerText);
            var bId = this.id;
            console.log("You pressed button with ID: " + bId);
            snip1.pause();
        });

          setTimeout(function() {
            snip1.pause();
          }, 5000);
          break;
    
        case "song2":
          var snip2 = new Audio("Songs/Aint That Peculiar Snippet.mp3");
          snip2.play();
          setTimeout(function() {
            snip2.pause();
          }, 2000);
          break;

        case "song3":
           var snip3 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
           snip3.play();
           setTimeout(function() {
             snip3.pause();
           }, 2000);
           break;

        case "song4":
           var snip4 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
           snip4.play();
           setTimeout(function() {
             snip4.pause();
           }, 2000);
           break;

        case "song5":
           var snip5 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
           snip5.play();
           setTimeout(function() {
             snip5.pause();
           }, 2000);
           break;

        case "song6":
            var snip6 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip6.play();
            setTimeout(function() {
              snip6.pause();
            }, 2000);
            break;

        case "song7":
            var snip7 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip7.play();
            setTimeout(function() {
              snip7.pause();
            }, 2000);
            break;

        case "song8":
            var snip8 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip8.play();
            setTimeout(function() {
               snip8.pause();
            }, 2000);
            break;

        case "song9":
            var snip9 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip9.play();
            setTimeout(function() {
               snip9.pause();
            }, 2000);
            break;

        case "song10":
            var snip10 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip10.play();
            setTimeout(function() {
               snip10.pause();
            }, 2000);
            break;

        case "song11":
            var snip11 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip11.play();
            setTimeout(function() {
               snip11.pause();
            }, 2000);
            break;

        case "song12":
            var snip12 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip12.play();
            setTimeout(function() {
                snip12.pause();
            }, 2000);
            break;
    
        default: console.log("Unknown");
    }
}

function pauseClick(id){
    console.log(id);
    buttonAnimation2(id);

    switch (id) {
        case "song1p":
            var snip1 = new Audio("Songs/IWasMadeToLoveHer Snippet.mp3");
            snip1.pause();
            break;
    
        
    
        default: console.log("Unknown");
    }
}

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
        if (i == 0 && document.querySelectorAll("input")[i].value == "I"){
            correctAns++;
            document.querySelectorAll("input")[i].classList.remove("wrong");
            document.querySelectorAll("input")[i].classList.add("correct");
            document.querySelectorAll("input")[i].disabled = true
        }
        if (i == 0 && document.querySelectorAll("input")[i].value != "I"){
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
    /*console.log(correctAns);*/
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
    // console.log(buttonNumber);
    
    var activeButton = document.querySelector("#button" + buttonNumber);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }

  function buttonAnimation2(buttonId) {
    // console.log("Button ID is: " + buttonId);
    
    var activeButton = document.querySelector("#" + buttonId);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
    
  }