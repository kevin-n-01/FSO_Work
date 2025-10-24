const Contact = ({person, handleDelete}) => {
    return (
      <div>
        {`${person.name}: ${person.number}`}
        <button onClick={handleDelete}>Delete Contact</button>
      </div>
    )
  }

export default Contact