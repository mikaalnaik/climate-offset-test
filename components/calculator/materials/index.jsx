import React from 'react';

export default function CalculatorMaterialSection({ productCategory }) {
  return (
    <div className='col-span-6 sm:col-span-3'>
      <label
        htmlFor='country'
        className='block text-sm font-medium text-gray-700'
      >
        Materials
      </label>
      <select
        id='country'
        name='country'
        autoComplete='country-name'
        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      >
        <option>Cotton</option>
        <option>Polyester</option>
        <option>Linen</option>
        <option>Viscose</option>
        <option>Nylon</option>
      </select>
      <input
        type='number'
        name='street-address'
        id='street-address'
        placeholder='% of Materials'
        autoComplete='street-address'
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />
    </div>
  );
}
