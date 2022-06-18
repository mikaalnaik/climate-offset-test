import React, { useState } from 'react';
import styles from './home.module.scss';
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import CalculatorMaterialSection from 'components/calculator/materials';
import {
  ProductCategories,
  ProductSubCategories,
} from 'data/product-categories';
import CalculatorProductSubCategorySection from 'components/calculator/product-subcategories';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  const [category, setCategory] = useState('apparel');
  const [materials, setMaterials] = useState([
    { type: 'cotton', percentage: 0 },
  ]);

  const changeCategory = (evt) => {
    setCategory(evt.target.value);
  };

  const addMaterial = () => {
    setMaterials([...materials, { type: 'cotton', percentage: 0 }]);
  };

  return (
    <section className={styles.component}>
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1 mb-4'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                CO2 Footprint Calculator
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className='mt-5 md:mt-0 md:col-span-2'>
            <form action='#' method='POST'>
              <div className='shadow overflow-hidden sm:rounded-md'>
                <div className='px-4 py-5 bg-white sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='country'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Product Category
                      </label>
                      <select
                        id='product-category'
                        name='product-category'
                        autoComplete='product-category'
                        onChange={changeCategory}
                        className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      >
                        {ProductCategories.map((category) => {
                          return <option key={category}>{category}</option>;
                        })}
                      </select>
                    </div>
                    {ProductSubCategories[category] && (
                      <CalculatorProductSubCategorySection
                        category={category}
                      />
                    )}

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='weight'
                        className='block text-sm font-medium text-gray-700'
                      >
                        {category === 'apparel' ? 'Weight' : 'Distance'}
                      </label>
                      <input
                        type='number'
                        name='weight'
                        id='weight'
                        placeholder={
                          category === 'apparel'
                            ? 'Weight in lbs'
                            : 'Distance in km'
                        }
                        autoComplete='weight'
                        className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                      />
                    </div>

                    {category === 'apparel' && (
                      <>
                        {materials.map((material, index) => {
                          return <CalculatorMaterialSection />;
                        })}
                        <PlusSmIcon
                          className='h-8 w-8 shadow-md rounded-full max-w-full mx-auto bg-white'
                          onClick={addMaterial}
                          aria-hidden='true'
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                  <button className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.estimate}>
        <h1>Carbon Footprint</h1>
      </div>
    </section>
  );
}
