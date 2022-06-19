/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';
import styles from '../styles/home-page.module.scss';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import Footer from 'components/Footers/Footer.js';

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section
        className={` ${styles.hero} header relative pt-16 items-center mb-72 pb-72 flex h-screen max-h-860-px`}
      >
        <div className={styles['hero-content']}>
          <div className='w-full z-3 md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 '>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-6xl'>
                We make climate action actionable.
              </h2>
              <p className='mt-4 text-lg leading-relaxed'>
                Transparent and economical offsets at any scale. Integrating
                with your favourite platform and APIs devs love, being climate
                conscious has never been easier.
              </p>
              <p className='mt-4 text-xlg leading-relaxed'>$0 merchant fees.</p>
              <div className='mt-12'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className={styles['hero-image']}>
          <img
            className=''
            src='https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
            alt='...'
          />
        </section>
      </section>

      <section className='mt-72 pt-40 pb-40 relative bg-blueGray-100 '>
        <div
          className=' top-0 bottom-auto left-0 right-0 w-full absolute h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-blueGray-100 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='container mx-auto mt-72'>
          <div className='flex flex-wrap items-center'>
            <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700'>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1556742521-9713bf272865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  className='w-full align-middle rounded-t-lg'
                />
                <blockquote className='relative p-8 mb-4'>
                  <svg
                    preserveAspectRatio='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 583 95'
                    className='absolute left-0 w-full block h-95-px -top-94-px'
                  >
                    <polygon
                      points='-30,95 583,95 583,65'
                      className='text-blueGray-700 fill-current'
                    ></polygon>
                  </svg>
                  <h4 className='text-xl font-bold text-white'>
                    Zero effort, maximum impact
                  </h4>
                  <p className='text-md font-light mt-2 text-white'>
                    Run your business carbon neutral tomorrow, just like you are
                    today. Integration with leading e-commerce platforms, POS
                    system and a developer friendly API means zero effort
                    offsets.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className='w-full md:w-6/12 px-4'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-sitemap'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        Direct Air Capture
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        Our offsets directly remove CO2 from the atmosphere so
                        your products are net-zero.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-drafting-compass'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        Carbon Footprinting
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        Get granular analysis of your products CO2 footprint
                        from our carbon calculator. Use our web app, or our API
                        to footprint your entire catalog.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-newspaper'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        Put the 'eco' in economical
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        We purchase offsets in bulk which means removing the CO2
                        is ~1% of cart totals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto overflow-hidden pb-20'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-sitemap text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                Direct Air Capture
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                No esoteric or ambiguous impact. We've partnered with
                state-of-the-art direct air capture facilities to remove and
                store CO2 directly from the atmosphere. All done with total
                transparency for you and your customers.
              </p>
              <a
                href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index'
                target='_blank'
                className='font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150'
              >
                View All{' '}
                <i className='fa fa-angle-double-right ml-1 leading-relaxed'></i>
              </a>
            </div>

            <div className='w-full md:w-5/12 px-4 mr-auto ml-auto mt-32'>
              <div className='relative flex flex-col algin min-w-0 w-full mb-6 mt-30 md:mt-0'>
                <img
                  alt='...'
                  src='https://images.unsplash.com/photo-1615209853186-e4bd66602508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
                  className='w-full align-middle rounded  shadow-lg pt-6 z-3'
                />
              </div>
            </div>
          </div>

          <div className='flex flex-wrap items-center pt-32'>
            <div className='w-full md:w-6/12 px-4 mr-auto ml-auto mt-32'>
              <div className='justify-center flex flex-wrap relative'>
                <div className='my-4 w-full lg:w-6/12 px-4'>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-red-600 shadow-lg rounded-lg text-center p-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-2 bg-white'
                        src='https://logo.clearbit.com/shopify.com'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>
                        Shopify
                      </p>
                    </div>
                  </a>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white'
                        src='https://logo.clearbit.com/magentoassociation.com'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>
                        Magento
                      </p>
                    </div>
                  </a>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-4 bg-white'
                        src='https://logo.clearbit.com/bigcommerce.com'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>
                        BigCommerce
                      </p>
                    </div>
                  </a>
                </div>
                <div className='my-4 w-full lg:w-6/12 px-4 lg:mt-16'>
                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <img
                        alt='...'
                        className='shadow-md rounded-full max-w-full w-24 mx-auto p-4 bg-white'
                        src='https://logo.clearbit.com/squarespace.com'
                      />
                      <p className='text-lg text-white mt-4 font-semibold'>
                        Squarespace
                      </p>
                    </div>
                  </a>

                  <a
                    href='https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index'
                    target='_blank'
                  >
                    <div className='bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8'>
                      <p className='text-lg text-white mt-4 font-semibold'>
                        + More Coming Soon
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className='w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-drafting-compass text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                Your favourite platforms
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
                Simple extensions on Shopify, BigCommerce, Magento, and APIs
                that engineers love make it easy to run your business carbon
                neutral.
              </p>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'></p>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-file-alt text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>Dev friendly APIs</h3>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                  Audit your entire catalog and run your business carbon neutral
                  easier than ever before.
                </p>
                <ul className='list-none mt-6'>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fas fa-fingerprint'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className='py-2'>
                    <div className='flex items-center'>
                      <div>
                        <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3'>
                          <i className='fab fa-html5'></i>
                        </span>
                      </div>
                      <div>
                        <h4 className='text-blueGray-500'>
                          Beautiful documentation
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <img
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform:
                    'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
                }}
                src='/img/documentation.png'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-blueGray-600 overflow-hidden'>
        <div className='container mx-auto pb-64'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64'>
              <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                <i className='fas fa-code-branch text-xl'></i>
              </div>
              <h3 className='text-3xl mb-2 font-semibold leading-normal text-white'>
                Transparent as CO2
              </h3>
              <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400'>
                We're on a mission to revert the effects of climate change. The
                offsets we supply are based on state-of-the-art technology that
                directly removes CO2 from the atmosphere. How we calculate
                footprints, where and how the offset takes place is transparent
                to you and your customer, because we know you care as much as we
                do about the impact we have.
              </p>
              <p className='text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400'>
                Chat with our team about what Revert can do for you, your
                customers, and the world.
              </p>
              <a
                href='https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index'
                target='_blank'
                className='github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'
              >
                Get in touch
              </a>
            </div>

            <div className='w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative'>
              <i className='fab fa-planet-moon text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80'></i>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-16 bg-blueGray-200 relative pt-32'>
        <div
          className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-blueGray-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>

        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10'>
            <div className='w-full text-center lg:w-8/12'>
              <p className='text-4xl text-center'>
                <span role='img' aria-label='love'>
                  😍
                </span>
              </p>
              <h3 className='font-semibold text-3xl'>Still have questions?</h3>
              <p className='text-blueGray-500 text-lg leading-relaxed mt-4 mb-4'>
                We'd love to hear from you. Send us an email or reach out
                directly to us here.
              </p>
              <div className='sm:block flex flex-col mt-10'>
                <a
                  href='https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index'
                  target='_blank'
                  className='sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg'
                >
                  <i className='fab text-lg mr-1'></i>
                  <span>Reach out</span>
                </a>
              </div>
              <div className='text-center mt-16'></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
