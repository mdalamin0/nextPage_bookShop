import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const BookDetails = () => {
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    const [fold, setFold] = useState(false)
    const book = useLoaderData();
    const { image, title, authors, publisher, year, rating, price, desc } = book;
    return (
        <div className='my-container'>
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>

                <div className=' lg:w-1/2 h-full'>
                    <img className='object-cover w-full  lg:h-full' src={image} alt="book" />
                </div>
                <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <p className='badge'>Brand new</p>
                    <h2 className='text-4xl font-bold'>{title}</h2>
                    <p className=' text-gray-900 mt-4'>Authors: {authors.substring(0, 50)}</p>
                    <p className=' text-gray-900'>Publisher: {publisher}</p>
                    <p className=' text-gray-900'>Year: {year}</p>
                    <p className='mb-5 text-gray-900'>Rating: {rating}</p>
                    {fold ? (
                        <>
                            <p className=' text-gray-500'>{desc.substring(0, 100)}.....</p>
                            <span
                                className='cursor-pointer text-blue-600 '
                                onClick={() => setFold(!fold)}
                            >
                                Read More
                            </span>
                        </>
                    ) : (
                        <>
                            <p className=' text-gray-900'>{desc}</p>
                            <span
                                className='cursor-pointer text-blue-600 '
                                onClick={() => setFold(!fold)}
                            >
                                Read Less
                            </span>
                        </>
                    )}
                    <div className='flex gap-5 mt-8 items-center'>
                        <a href='#' target='_blank' className='btn'>
                            Buy Now
                        </a>
                        <p className='items-center font-extrabold text-gray-600 '>
                            Price: {price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;