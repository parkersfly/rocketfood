import { createContext, useContext } from "react";

import { api } from '../services/api'
import { useState } from "react";

export const SearchContext = createContext()

function SearchProvider({ children }){
  const [plates, setPlates] = useState([]);

  async function fetchPlates(search){
    const response = await api.get(`/plates?title=${search}`)

    return setPlates(response.data)
  }

  return (
    <SearchContext.Provider value={{ fetchPlates, plates }}>
      {children}
    </SearchContext.Provider>
  )
}

function useSearch(){
  const context = useContext(SearchContext)

  return context
}

export {
  SearchProvider,
  useSearch
}