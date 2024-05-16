// Lets you send http requests 
// This can also be done on the browser as well as the postman 
// This code will give the response in json format but can also be done for the simple text and html.

function logResponseBody(jsonBody) {
    console.log(jsonBody);
}
function callbackFun(result) {
    result.json().then(logResponseBody)
}

var sendObject = {
    method: "GET"
    // we can also put body and the headers here 
};

// FETCH will help to talk to an http server 
fetch("http://localhost:3001/handleSum?counter=10",sendObject).then(callbackFun)