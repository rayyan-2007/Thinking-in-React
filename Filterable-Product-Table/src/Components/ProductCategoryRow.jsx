import React from 'react'

//receive category data from the productTable then destructure
const ProductCategoryRow = ({category}) => {

  return (
    //inside table row the header shows category of products heading dynamically, colSpan streaches the table to 2 size
    <>
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    </>
  );
}

export default ProductCategoryRow
