import React from 'react';
import FilterableProductTable from './FilterableProductTable';
import PRODUCTS from './products';

const App = () => <FilterableProductTable products={PRODUCTS} />;

export default App;