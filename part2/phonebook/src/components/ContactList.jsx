import Contact from "./Contact"
const ContactList = ({persons, handleDelete}) => {
    return (
        <div>
            {persons.map((person) => (
                <Contact key={person.id} person={person} handleDelete={() => handleDelete(person.id)} />
            ))}
        </div>
    )
}

export default ContactList