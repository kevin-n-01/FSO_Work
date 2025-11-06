const express = require('express');
const app = express();
const port = process.env.PORT || 3001

app.use(express.json());

const now = new Date().toLocaleString();

let contacts = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(contacts);
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    const person = contacts.find(contact => contact.id === id);
    if(person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
    console.log(`Retrieved contact ${person.name}`);
})

//API Request for General Info
app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${contacts.length} people.</p>
        <p>${now}`)
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})