import { PlusSmIcon } from '@heroicons/react/solid';
import { ApparelCarbonFootprintPerLbs } from 'data/product-categories';
import React, { useState } from 'react';
import CalculatorMaterialSection from '../materials';

export default function ApparelCalculator({ setOffset }) {
  const [weight, setWeight] = useState(0);
  const [materials, setMaterials] = useState([
    { type: 'cotton', percentage: 0 },
  ]);
  const calculateApparelOffset = (e) => {
    e.preventDefault();
    const totalFootprintForProduct = materials.reduce((accum, material) => {
      const carbonCooeficient =
        ApparelCarbonFootprintPerLbs[material.type.toLowerCase()];
      const weightOfMaterial = (weight * material.percentage) / 100;

      const carbonFootprintOfMaterialInProduct =
        carbonCooeficient * weightOfMaterial;

      accum = accum + carbonFootprintOfMaterialInProduct;

      return accum;
    }, 0);
    setOffset(totalFootprintForProduct);
  };

  const addMaterial = () => {
    setMaterials([...materials, { type: 'cotton', percentage: 0 }]);
  };
  return (
    <div>
      <label
        htmlFor='country'
        className='block text-sm font-medium text-gray-700'
      >
        Weight
      </label>
      <input
        type='number'
        name='weight'
        id='weight'
        onChange={(e) => setWeight(e.target.value)}
        placeholder={'Weight in lbs'}
        autoComplete='weight'
        className='mt-1 mb-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />

      <>
        {materials.map((material, index) => {
          return (
            <CalculatorMaterialSection
              materials={materials}
              setMaterials={setMaterials}
              index={index}
            />
          );
        })}
        <PlusSmIcon
          className='h-8 w-8 shadow-md rounded-full max-w-full mx-auto bg-white'
          onClick={addMaterial}
          aria-hidden='true'
        />
      </>

      <button
        onClick={calculateApparelOffset}
        class='mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
      >
        Calculate
      </button>
    </div>
  );
}
