import React, {useState} from 'react'

const Autocomplete = ({possibleSearchResults}) => {
    
    const [filteredSuggestions, setFilteredSuggestions] = useState([])
    const [userInput, setUserInput] = useState("")

    function onChange(e) {
        setUserInput(e.currentTarget.value)

        const filteredResults = possibleSearchResults.filter(
            searchResult => searchResult.includes(userInput)
        )

        setFilteredSuggestions(filteredResults)
    }
    
    return (
        <div>
            <input 
                type="text"
                onChange={onChange}
            />

            {filteredSuggestions.map((result, index) => (
                <li key={`${result}-${index}`}>
                    {result}
                </li>
            ))}
        </div>
    )
}

export default Autocomplete