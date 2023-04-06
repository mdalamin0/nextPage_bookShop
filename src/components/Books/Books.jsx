import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Books = () => {
    const books = useLoaderData();
    console.log(books.books)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12 md:mx-32 me-10 mt-16'>
           {
            books.books.map(book => <Book key={book.isbn13} book={book}></Book>)
           }
        </div>
    );
};

export default Books;