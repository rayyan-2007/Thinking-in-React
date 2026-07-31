import React from 'react'
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

//receive data and state value  from the FilterableproductTable then destructure data and state value
const ProductTable = ({products ,filterText, inStocked }) => {

  //create a empty array to store product components and display data dynamically initially set row to empty array
  const row=[];
  //used to remember lastest category heading initially starts with null
  let lastCategory = null;

         {
          //access each products one by one, then filter the  productname and filtertext based on condition given below here
          //if the product.name and filterText is coverted to lowercase() then check the position of filterText(user typed data) is === -1 then return(means) skip the product.name-> means(not exists product.name) show empty page
          //if it is false show the products data based on what user search
          products.forEach((product=>{
            if (
              product.name.toLowerCase().indexOf(filterText.toLowerCase()) ===
              -1
            ) {
              return;
            }

            //check whether product.stocked(user click the checkbox) and !product.stocked(!false means -> true !true means->false) both condition are true skip the product
            //if it is false show the stocked products only
            //in default shows both stocked and unStocked products;
            if (inStocked && !product.stocked) {
              //skip
              return;
            }

            //if the product category not equal to the lastCategory then add a new category row
            //push all the products.category data in the row[] array then send as a prop to productCategoryRow component
            //in products list array, react need a unique identifier, that's why use key prop
            if (product.category !== lastCategory) {
              row.push(
                <ProductCategoryRow
                  category={product.category}
                  key={`${product.category}`}
                />,
              );
            }

            //push all the products data in the row[] array, then send as a prop to productRow component
            //in products list array react need a unique identifier that's why use key prop
            //change the lastCategory to new Product.Category 
            row.push(
              <ProductRow product={product} key={`product-${product.name}`} />,
            );
            lastCategory = product.category;
          }))
          }

        
  return (
    //show table heading in the webpage
    //show table row products data in the webpage dynamically based on Usestate() and conditional redering and conditions
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        
        <tbody>{row}</tbody>
      </table>
    </>
  );
}

export default ProductTable
