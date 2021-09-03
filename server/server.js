const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('zenith is here')
})


app.listen(PORT, (req, res)=>{
    console.log(` server is connected on port ${PORT}`);
})