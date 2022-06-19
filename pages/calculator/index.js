import React, { useState } from 'react';
import styles from './home.module.scss';
import { ProductCategories } from 'data/product-categories';
import TravelCalculator from 'components/calculator/travel';
import ApparelCalculator from 'components/calculator/apparel';
import FootprintTotals from 'components/calculator/footprint-totals';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';

export default function Example() {
  const [totalOffset, setTotalOffset] = useState(0);
  const [category, setCategory] = useState('apparel');

  const changeCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <section className={styles.component}>
        <IndexNavbar fixed />

        <main>
          <div className='sm:mt-0 mr-4'>
            <div className='md:grid md:grid-cols-3 md:gap-6'>
              <div className='md:col-span-1 mb-4'>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Calculator
                  </h3>
                  <p className='mt-1 text-sm text-gray-600'>
                    Discover the CO2 footprint of your products and trips.
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
                        {category === 'apparel' && (
                          <ApparelCalculator setOffset={setTotalOffset} />
                        )}
                        {category === 'travel' && (
                          <TravelCalculator setOffset={setTotalOffset} />
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <FootprintTotals totalOffset={totalOffset} />
      </section>
      <Footer />
    </>
  );
}
