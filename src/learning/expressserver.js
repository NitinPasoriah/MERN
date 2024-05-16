// Express will create an http request 

const express = require('express')
var bodyparser = require('body-parser')
const app = express()
const port = 3001
// Request can be a get, post, update, put
// app.get('/', (req, res) => {
//     console.log(req.query); 
//     res.send("server response")
// })
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`)
// })
// or 

app.use(bodyparser.json()) // Middleware 
function calclulateSum(counter){
    var sum =0 ;
    for (var i=0 ;i< counter; i++){
        sum = sum +i;
    }
    return sum;
}

function handleFirstRequest(req,res) {
    console.log(req.body);
    console.log(req.headers.counter);
    var counter = req.query.counter; // passed in the url http://localhost:3001/handleSum?counter=5
    var calculatedSum = calclulateSum(counter);

    var answer = {
        sum: calculatedSum
    }
    res.status(200).send(answer)
}
app.get('/handleSum', handleFirstRequest)

function started() {
    console.log('Example app listening on port ${port}')
}

app.listen(port, started)