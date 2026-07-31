import React from 'react'

//receive all products data from the filterableProductTable then destructure the data
const ProductRow = ({product}) => {
  //check whether the product stock state is true or not using ternary operator
  //if it is true(product is in the stock) show products name and price in black color
  //if it is false(product is not in the stock) show products name in red color
  const Product = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );


  return (
    //return the product name and price in table row and inside table data dynamically based on the state and condition
     <>
      <tr>
        <td>{Product}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

export default ProductRow
