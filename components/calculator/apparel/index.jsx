import { PlusSmIcon } from '@heroicons/react/solid';
import {
  ProductSubCategories,
  ApparelCarbonFootprintPerKm,
  ProductCateogryMaterials,
  ApparelCarbonFootprintPerLbs,
} from 'data/product-categories';
import React, { useState } from 'react';
import CalculatorMaterialSection from '../materials';

export default function ApparelCalculator({ setOffset }) {
  const [weight, setWeight] = useState(0);
  const [materials, setMaterials] = useState([
    { type: 'cotton', percentage: 0 },
  ]);
  const calculateApparelOffset = (e) => {
    e.preventDefault();
    // const carbonCooeficient = ApparelCarbonFootprintPerLbs['apparel'];
    // setOffset(carbonCooeficient * distance);
  };

  const addMaterial = () => {
    setMaterials([...materials, { type: 'cotton', percentage: 0 }]);
  };
  return (
    <div>
      <input
        type='number'
        name='weight'
        id='weight'
        onChange={(e) => setWeight(e.target.value)}
        placeholder={'Weight in lbs'}
        autoComplete='weight'
        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
      />

      <>
        {materials.map((material, index) => {
          return <CalculatorMaterialSection materials={materials} />;
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
