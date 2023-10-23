const express = require('express');
var app = express();

app.get('/', (req,res) =>{
    res.json('Home')
})


app.listen(3000, () => {
    console.log('Sever started on port');
});