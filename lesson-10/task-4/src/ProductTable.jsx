import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const { category, name, stocked } = product;

    if (name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !stocked) {
      return;
    }
    if (category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={category}
          key={category} 
        />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={name} 
      />
    );
    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;