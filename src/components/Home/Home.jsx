import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../assets/reader.json';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
            <div>
                <p className='badge'>On sale!</p>
                <h1 className='text-5xl font-bold'>A reader lives a <br /> thousand lives <span className='text-blue-600'>before he dies</span></h1>
                <p className='text-base text-gray-700 md:text-lg mt-5 mb-5'>
                    Books are a uniquely portable magic. Books serve to show a <br /> man that
                    those original thoughts of his aren’t very new after <br /> all. The man
                    who does not read good books is no better than the man who can’t.
                </p>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/books' className='btn md:w-auto md:mr-4'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3'>Visit Store</p>
                            <ShoppingCartIcon className='w-5 text-gray-100' />
                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;