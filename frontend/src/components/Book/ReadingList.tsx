import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import BookCard from './BookCard';
import ConfirmDialog from './ConfirmDialog';

interface Book {
    title: string;
    author: string;
    coverPhotoURL: string;
}

interface ReadingListProps {
    books: Book[];
    onRemove: (book: Book) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemove }) => {
    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const handleOpenDialog = (book: Book) => {
        setSelectedBook(book);
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setSelectedBook(null);
    };

    const handleConfirmRemove = () => {
        if (selectedBook) {
            onRemove(selectedBook);
        }
        handleCloseDialog();
    };

    return (
        <Box>
            <Grid container spacing={2} alignItems="stretch">
                {books.map((book, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} display="flex">
                        <BookCard
                            title={book.title}
                            author={book.author}
                            coverPhotoURL={book.coverPhotoURL}
                            onRemove={() => handleOpenDialog(book)}
                        />
                    </Grid>
                ))}
            </Grid>
            <ConfirmDialog
                open={open}
                onClose={handleCloseDialog}
                onConfirm={handleConfirmRemove}
                bookTitle={selectedBook?.title || ''}
            />
        </Box>
    );
};

export default ReadingList;
