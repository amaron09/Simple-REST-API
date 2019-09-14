let todos = [
    {
        title: "Buy Milk",
        completed: false,
        id: 1
    },
    {
        title: "JavaScripting",
        completed: false,
        id: 2
    },
    {
        title: "Sell Milk",
        completed: false,
        id: 3
    },
    {
        title: "JavaBugging",
        completed: false,
        id: 4
    },
    {
        title: "Horde Milk",
        completed: false,
        id: 5
    },
    {
        title: "JavaCoding",
        completed: false,
        id: 6
    },
]

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

app.get('/todos', (req, res, next) => {
    res.json(todos);
})

app.get('/', (req, res, next) => {
    res.sendFile('index.html');
})

app.delete('/delete/:id', (req, res, next) => {
    let deleteQuery = req.params.id;
    todos.splice(deleteQuery, 1),
    res.json(todos);
})

app.patch('/patch/:id', (req, res, next) => {
    let patchId = req.params.id;
    let patchedContent = req.body;
    todos[patchId] = patchContent;
    res.json(todos)
})

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});



