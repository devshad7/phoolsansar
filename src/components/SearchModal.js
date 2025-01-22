'use client'

import { SearchIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [query, setQuery] = useState('');
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
        onClose()
    };

    return (
        <div className="fixed inset-0 transition-opacity md:bg-black md:bg-opacity-30 backdrop-blur-sm flex flex-col items-center z-50 py-10 md:py-20" onClick={onClose}>
            <div>
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        className="rounded-[8px] md:w-[28rem] py-4 pl-10 pr-16 text-blue-950 placeholder-gray-400/70 focus:outline-none text-base shadow-categories border border-gray-100"
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 px-2 py-1 rounded-[4px] text-sm">
                        <Button type='submit' className='customBtn' onClick={handleSearch}>Search</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;