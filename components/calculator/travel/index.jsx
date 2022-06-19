import {
  ProductSubCategories,
  TravelCarbonFootprintPerKm,
} from 'data/product-categories';
import React, { useState } from 'react';

export default function TravelCalculator({ setOffset }) {
  const [method, setMethod] = useState('airplane');
  const [distance, setDistance] = useState(0);

  const calculateTravelOffset = (e) => {
    e.preventDefault();
    const carbonCooeficient = TravelCarbonFootprintPerKm[method];
    setOffset(carbonCooeficient * distance);
  };

  return (
    <div>
      <label
        htmlFor='travel-type'
        className='block text-sm font-medium text-gray-700'
      >
        Product
      </label>
      <select
        id='travel-type'
        name='travel-type'
        onChange={(e) => setMethod(e.target.value)}
        autoComplete='travel-type-name'
        className=' block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      >
        {ProductSubCategories['travel']?.map((subCategory) => {
          return <option key={subCategory}>{subCategory}</option>;
        })}
      </select>
      <input
        type='number'
        name='weight'
        id='weight'
        onChange={(e) => setDistance(e.target.value)}
        placeholder={'Distance in km'}
        autoComplete='weight'
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />

      <button
        onClick={calculateTravelOffset}
        class='mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      >
        Calculate
      </button>
    </div>
  );
}
