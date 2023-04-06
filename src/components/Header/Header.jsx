import React, { useState } from 'react';
import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='py-6 bg-gray-200 relative '>
            <div className='flex justify-between mx-12 '>
                <div className='flex items-center'>
                    <BoltIcon className="h-7 w-7 text-blue-500" />
                    <h5 className='text-xl font-semibold ms-2'>nextPage</h5>
                </div>
                <div>
                    <ul className='md:flex items-center space-x-8 hidden'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold underline' : 'text-slate-700 font-semibold')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/books' className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold underline' : 'text-slate-700 font-semibold')}>
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about us' className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold underline' : 'text-slate-700 font-semibold')}>
                                About us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* mobile */}
                <div className='md:hidden'>
                    <div >
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <span>{menuOpen ? <XMarkIcon title='close menu' className='h-7 w-7'></XMarkIcon> : <Bars3Icon title='open menu' className='w-7 h-7 '></Bars3Icon>}</span>
                        </button>
                    </div>
                    <div className={`absolute  duration-500 ${menuOpen ? 'top-10 right-28' : '-top-36 right-28'}`}>
                        <ul className= 'bg-gray-100 shadow-md px-14 py-6'>
                            <li>
                                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold underline' : 'text-slate-700 font-semibold')}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/books' className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold underline' : 'text-slate-700 font-semibold')}>
                                    Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about us' className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold underline' : 'text-slate-700 font-semibold')}>
                                    About us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;