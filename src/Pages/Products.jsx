import React, { useState } from 'react';
import ProductFilter from '../Components/PageComponents/ProductFilter';
import ProductCard from '../Components/ProductCard';
import MockProducts from '../MockContent/MockProduct';

export default function Products() {
  const [searchVal, setSearchVal] = useState('');

  const [allProducts] = useState(
    MockProducts.map((product) => <ProductCard incomingProduct={product} />),
  );

  return (
    <div className="w-full font-pop xl:pt-36 gap-14 lg:pt-36 pt-28 p-5 grid grid-cols-1 place-content-start place-items-center">
      <ProductFilter props={{ searchVal, setSearchVal }} />
      <div className="w-full max-w-7xl grid grid-cols-1 place-content-start place-items-center">
        <div className="w-full relative font-pop place-content-start place-items-center max-w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {allProducts}
        </div>
      </div>
    </div>
  );
}
