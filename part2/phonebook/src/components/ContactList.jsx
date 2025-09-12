import Contact from "./Contact"
const ContactList = ({persons}) => {
    return (
        <div>
            {persons.map((person) => (
                <Contact key={person.name} person={person} />
            ))}
        </div>
    )
}

export default ContactList