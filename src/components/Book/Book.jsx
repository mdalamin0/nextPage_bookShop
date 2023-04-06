import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, title, subtitle, price, isbn13 } = book;
    return (
        <Link to= {`../book/${isbn13}`} className="card w-full  bg-base-100 shadow-md relative transition duration-200 transform hover:-translate-y-2">
            <div className=''>
                <figure className="px-8 ">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
            </div>

            <div className='absolute inset-0 bg-black px-6 py-4 opacity-0 hover:opacity-70 transition-opacity duration-200 text-gray-100 rounded-md hover:shadow-lg flex flex-col'>
                <h3 className='text-2xl font-bold'>{title}</h3> <br />
                <p>{subtitle.substring(0, 60)}...</p>
                <p className='mt-auto'>Price: {price}</p>
            </div>

        </Link>
    );
};

export default Book;