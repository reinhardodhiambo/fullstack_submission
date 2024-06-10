import React, { useState } from 'react';
import { Grid, Pagination, Box } from '@mui/material';
import BookCard from './BookCard';

interface Book {
    title: string;
    author: string;
    coverPhotoURL: string;
}

interface BookListProps {
    books: Book[];
    onAdd: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
    const [page, setPage] = useState(1);
    const booksPerPage = 9;
    const totalPages = Math.ceil(books.length / booksPerPage);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const startIndex = (page - 1) * booksPerPage;
    const selectedBooks = books.slice(startIndex, startIndex + booksPerPage);

    return (
        <Box>
            <Grid container spacing={2} alignItems="stretch">
                {selectedBooks.map((book, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} display="flex">
                        <BookCard
                            title={book.title}
                            author={book.author}
                            coverPhotoURL={book.coverPhotoURL}
                            onAdd={() => onAdd(book)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box display="flex" justifyContent="center" mt={2}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
};

export default BookList;
