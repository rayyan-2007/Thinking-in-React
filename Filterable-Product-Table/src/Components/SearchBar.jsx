import React from 'react'

const SearchBar = ({
  //receive states as a prop then destructure the states
  setFilterText,
  setinStocked,
  filterText,
  inStocked})=> {
  return (
    <>
      <form>
        <div>
          <input
            //if user starts entering the text in input field state will change dynamically based on the state filter the products items then show on the webpage
            onChange={(event) => {
              //use setFilterText function to update filterText
              setFilterText(event.target.value);
            }}
            value={filterText}
            type="text"
            placeholder="Searh Products..."
          />
        </div>
        <div>
          <label>
            <input
              //if user click the checkbox field the state will change dynamically based on the state filter the products items then show on the webpage
              type="checkbox"
              checked={inStocked}
              //use setinStocked function to update inStocked
              onChange={(e) => setinStocked(e.target.checked)}
            />{" "}
            Only show products in stock
          </label>
        </div>
      </form>
    </>
  );
};

export default SearchBar
