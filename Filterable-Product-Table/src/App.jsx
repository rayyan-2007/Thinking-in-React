import React from 'react'
import {PRODUCTS} from "./ProductData";
import FilterableProductTable from './Components/FilterableProductTable'
import SearchBar from './Components/SearchBar'

const App = () => 
  //send all products data to filterableProductTable as a prop
{
  return (
    <>
       
      <FilterableProductTable products={PRODUCTS}/>
    </>
  )
}

export default App
