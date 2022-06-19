import React from 'react';

export default function CalculatorMaterialSection({ setMaterials, index }) {
  const handleTypeChange = (e) => {
    const material = e.target.value;
    setMaterials((prevMaterials) => {
      const newMaterials = [...prevMaterials];
      newMaterials[index] = {
        type: material,
        percentage: newMaterials[index]?.percentage,
      };
      return newMaterials;
    });
  };

  const handlePercentageChange = (e) => {
    const percentage = Number(e.target.value);
    setMaterials((prevMaterials) => {
      const newMaterials = [...prevMaterials];
      newMaterials[index] = {
        ...newMaterials[index],
        percentage,
      };
      return newMaterials;
    });
  };

  return (
    <div className='col-span-6 sm:col-span-3'>
      <label
        htmlFor='country'
        className='block text-sm font-medium text-gray-700'
      >
        Material
      </label>
      <select
        id='country'
        name='country'
        onChange={handleTypeChange}
        autoComplete='country-name'
        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
      >
        <option>Cotton</option>
        <option>Polyester</option>
        <option>Linen</option>
        <option>Viscose</option>
        <option>Nylon</option>
        <option>Wool</option>
        <option>Leather</option>
      </select>
      <input
        type='number'
        name='street-address'
        id='street-address'
        placeholder='% of Materials'
        onChange={handlePercentageChange}
        autoComplete='street-address'
        className='mt-1 mb-4   focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />
    </div>
  );
}
