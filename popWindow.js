function popUp1(correct, incorrect){
    var myWindow = window.open("", "", "width=500,height=600, top=300, left=400");
    // var myWindow = window.open("", "_parent");

    myWindow.document.write("<style>html{background-color: green}</style>");

    myWindow.document.write("<h1 style = 'text-align: center'>Good News</h1>");
    myWindow.document.write("<h1 style = 'text-align: center'>Lots of Opportunity to Improve</h1>");
    
    myWindow.document.write("<h1 style = 'text-align: center; font-size: 10rem; margin: 0px'>&#128169</h1>");
    
    myWindow.document.write("<h1 style = 'text-align: center; margin-top: 40px'>Number Correct: ");
    myWindow.document.write(correct);
    myWindow.document.write("</h1>");
    
    myWindow.document.write("<h1 style = 'text-align: center'>Number Incorrect: ");
    myWindow.document.write(incorrect);
    myWindow.document.write("</h1>");

    myWindow.document.write("<button onclick='window.close()' style = 'margin-left: 120px; font-family: serif; color: black; font-size: 2.5rem; border-radius: 25px;'>Close Window</button>");
 }

 function popUp2(correct, incorrect){
    var myWindow = window.open("", "", "width=500,height=600, top=300, left=400");
    // var myWindow = window.open("", "_parent");

    myWindow.document.write("<style>html{background-color: green}</style>");

    myWindow.document.write("<h1 style = 'text-align: center'>Not Bad</h1>");
    myWindow.document.write("<h1 style = 'text-align: center'>About Half the Answers Are Correct</h1>");
    
    myWindow.document.write("<h1 style = 'text-align: center; font-size: 10rem; margin: 0px'>&#128055</h1>");
    
    myWindow.document.write("<h1 style = 'text-align: center; margin-top: 40px'>Number Correct: ");
    myWindow.document.write(correct);
    myWindow.document.write("</h1>");
    
    myWindow.document.write("<h1 style = 'text-align: center'>Number Incorrect: ");
    myWindow.document.write(incorrect);
    myWindow.document.write("</h1>");

    myWindow.document.write("<button onclick='window.close()' style = 'margin-left: 120px; font-family: serif; color: black; font-size: 2.5rem; border-radius: 25px;'>Close Window</button>");
 }