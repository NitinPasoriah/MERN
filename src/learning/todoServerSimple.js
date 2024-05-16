const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let todos = [];

function findIndex(arr, id) {
    for (let i = 0 ; i  < arr.length ; i++) {
        if (arr[i].id === id) return i;
    }
    return -1;
}

function removeIndex(arr, index) {
    let newArray =[];
    for ( let  i = 0 ; i< arr.length ; i++){
        if (i!== index) newArray.push(arr[i]);
    }
    return newArray;
}

app.get('/todos', (req, res)=>{
    res.json(todos);
});

app.get('/todos/:id', (req, res)=>{
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    }
    else {
        res.json(todos[todoIndex]);
    }
});

// POST /todos/1
app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() + 1000000),
        title: req.body.title,
        description: req.body.description
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT /todos/1

app.put('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    }
    else {
        todos[todoIndex].title = req.body.title;
        todos[todoIndex].description = req.body.description;
        res.json(todos[todoIndex]);
    }
});

// DELETE /todos/1
app.delete('/todos/:id', (req, res) => {
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
        res.status(404).send();
    }
    else {
        todos = removeIndex(todos, todoIndex);
        res.status(200).send();
    }
});

//  for all other routes return 404
app.use((req, res, next) => {
    res.status(404).send();
});

module.exports = app;