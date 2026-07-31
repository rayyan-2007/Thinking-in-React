import React, { useState } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductCategoryRow from './ProductCategoryRow';

//receive all products data from the app then destructure
const FilterableProductTable = ({products}) => {
  //useState to change searchbar dynamically
  const [filterText, setFilterText] = useState("");

  //useState to change checkbox dynamically
  const [inStocked, setinStocked] = useState(false);

  return (
    <>
      <SearchBar
        //send state to searchBar as a prop
        setinStocked={setinStocked}
        setFilterText={setFilterText}
        filterText={filterText}
        inStocked={inStocked}
      />

      <ProductTable
        //send state to Product as a prop
        products={products}
        inStocked={inStocked}
        filterText={filterText}
      />
    </>
  );
}

export default FilterableProductTable
