import React from 'react'
import SearchResult from './SearchResult'
import './SearchResultsList.css'

const SearchResultsList = ({results}) => {
  return ( <div className='results-list'>
    {
        results.map((results, id)=>{
            return <SearchResult results={results} key={id}/>
        })
    }
  </div>
  )
}

export default SearchResultsList
