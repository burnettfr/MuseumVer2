const express = require('express');
const path = require('path');
 
const app = express(); // calls express function to start new Express app 
app.use(express.static('./'));

app.listen(3000,()=>{
    console.log("App listening on port 3000"); 
})

app.get('/',(req,res)=>{    
    res.sendFile(path.resolve(__dirname,'mainPage.html'));
})
