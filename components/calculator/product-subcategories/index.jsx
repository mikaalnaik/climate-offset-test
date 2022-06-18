import { ProductSubCategories } from 'data/product-categories';
import React from 'react';

export default function CalculatorProductSubCategorySection({ category }) {
  return (
    <div className='col-span-6 sm:col-span-3'>
      <label
        htmlFor='country'
        className='block text-sm font-medium text-gray-700'
      >
        Product
      </label>
      <select
        id='country'
        name='country'
        autoComplete='country-name'
        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      >
        {ProductSubCategories[category]?.map((subCategory) => {
          return <option key={subCategory}>{subCategory}</option>;
        })}
      </select>
    </div>
  );
}
