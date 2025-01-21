'use client'

import { useState, useEffect } from 'react';
import { SearchIcon } from 'lucide-react'
import Modal from './SearchModal';

const Search = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                setIsModalOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div onClick={() => setIsModalOpen(true)} className='cursor-pointer hover:text-indigo-500'>
                <SearchIcon className={'size-5'} />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default Search