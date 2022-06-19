import { CostPerLbsCO2Capture } from 'data/product-categories';
import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';

export default function FootprintTotals({ totalOffset }) {
  const costToOffset = Math.floor(CostPerLbsCO2Capture * totalOffset);

  return (
    <div className={styles.estimate}>
      <h1 className='text-4xl '>Carbon Footprint</h1>
      <section>
        <h2 className='text-3xl'>
          {Math.floor(totalOffset)}
          <h3 className='text-sm'>lbs of CO2</h3>
        </h2>
      </section>
      <section className={`${styles.cost} mb-4`}>
        <h2 className='text-4xl'>${costToOffset}</h2>
        <h2>to remove</h2>
      </section>
      <section>
        <Link href='https://tally.so/r/3xXp5o'>
          <button className={styles.button}>Remove this CO2</button>
        </Link>
      </section>
    </div>
  );
}
