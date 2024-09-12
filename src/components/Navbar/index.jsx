import { useState, useEffect, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
    const [search, setSearch] = useState('');

    useEffect(() => {console.log('search y/o onSearch cambio')}, [search, onSearch])

    const handleInputChange = (evt) => {
        setSearch(evt.target.value);
    };

    const handleInputKeyDown = (evt) => {
        if (evt.key === 'Enter'){
            onSearch(search);
        }
    };

    useImperativeHandle(ref, () => ({
        search,
        setSearch,
    }));

    return (
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',
        }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <p style={{ fontSize: 24, fontWeight: 'bold' }}>Events</p>
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <input 
                    placeholder="Search your favorite event" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value={search}
                    style={{ fontSize: 16, padding: '6px 12px', borderRadius: 12, width: 200, border: 'none' }}
                />
            </div>
        </div>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;