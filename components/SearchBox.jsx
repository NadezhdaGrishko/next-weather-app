import React, { useState } from 'react';
import cities from '../lib/cities.json'

export default function SearchBox() {
const [query, setQuery] = useState('')
const [results, setResults] = useState([])

const onChange = (e) => {
    const {value} = e.target
    setQuery(value)

    const matchedCities = []

    if(value.length > 3) {
        for(let city of cities) {
            const match = city.name.toLowerCase().includes(value.toLowerCase())
            if(match) {
                matchedCities.push(city)
            }
        }
    }
    setResults(matchedCities)
    console.log({results})
}


  return (
      <div>
          <input 
          className='outline-none p-4 bg-gray-400 text-white'
          type="search"
          value={query}
          onChange={onChange} />

          <div>
              {results.length > 0 &&
              results.map((city, index) => (
                  <div key={index}>
                      {city.name}, {city.country}
                  </div>
              ))}
          </div>
      </div>
  )
};

