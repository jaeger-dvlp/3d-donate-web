import React, { useState } from 'react';
import ProductSearchBar from '../Components/PageComponents/ProductSearchBar';

export default function Products() {
  const [searchVal, setSearchVal] = useState('');

  return (
    <div className="w-full font-pop xl:pt-36 lg:pt-36 pt-24 p-5 grid grid-cols-1 place-content-start place-items-center">
      <ProductSearchBar props={{ searchVal, setSearchVal }} />
    </div>
  );
}
