const express = require('express');
const app = express();
const port = process.env.PORT || 3001

app.use(express.json());

const now = new Date().toLocaleString();

const generateId = () => {
    return String(Math.floor(Math.random() * 100000));
}

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

app.post('/api/persons', (request, response) => {
    const newId = generateId();
    const body = request.body;
    if(!body.name || !body.number) {
        return response.status(400).json({
            error: 'Value Missing'
        })
    } else if(contacts.some(contact => contact.name === body.name)) {
        return response.status(400).json({
            error: `Contact ${body.name} already exists.`
        })
    }

    const contact = {
        id: newId,
        name: body.name,
        number: body.number
    }

    contacts = contacts.concat(contact);

    response.json(contact);
    console.log("Contact Added", contact);
})

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

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id;
    contacts = contacts.filter((contact) => contact.id !== id);
    //response.send('Deleted contact');
    response.status(204).end();
})

//API Request for General Info
app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${contacts.length} people.</p>
        <p>${now}`)
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})