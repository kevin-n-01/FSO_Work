const SelectCountry = ({ country, setCountry }) => {
    return (
        <button onClick={() => setCountry(country)}>Select</button>
    )
}

export default SelectCountry