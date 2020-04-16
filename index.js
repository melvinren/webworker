const express = require('express')

const app = express();

app.use(express.static(__dirname));

app.get("/api/data", (req, res) => {
    const data = { name: 'worker' }
    res.end(JSON.stringify(data))
    return;
})

app.listen(1000, function(){
    console.log('server is runing...')
})

