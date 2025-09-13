import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const contactServices = {
    getAll: () => axios.get(baseUrl).then(response => response.data),
    
    addContact: (contact) => axios.post(baseUrl, contact).then(response => response.data),

    deleteContact: (id) => axios.delete(`${baseUrl}/${id}`).then(response => response.data),

    updateContact: (contact) => axios.put(`${baseUrl}/${contact.id}`, contact).then(response => response.data)
}

export default contactServices