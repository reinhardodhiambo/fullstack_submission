import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface BookSearchProps {
    onSearch: (query: string) => void;
}

const BookSearch: React.FC<BookSearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <TextField
            label="Search Books"
            variant="outlined"
            fullWidth
            value={query}
            onChange={handleSearch}
            margin="normal"
        />
    );
};

export default BookSearch;
