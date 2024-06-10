import React, { useState } from 'react';
import { Container, Typography, Snackbar, ThemeProvider } from '@mui/material';
import { useBooks } from './hooks/useBooks';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import theme from './theme';
import Parallax from "./components/Parallax/Parallax";
import BookSearch from "./components/Book/BookSearch";
import BookList from "./components/Book/BookList";
import ReadingList from "./components/Book/ReadingList";

interface Book {
    title: string;
    author: string;
    coverPhotoURL: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App: React.FC = () => {
    const { books, loading, error } = useBooks();
    const [searchQuery, setSearchQuery] = useState('');
    const [readingList, setReadingList] = useState<Book[]>([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const filteredBooks = books.filter((book: any) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddBook = (book: Book) => {
        if (readingList.some(b => b.title === book.title)) {
            setSnackbarMessage('This book is already in your reading list.');
            setOpenSnackbar(true);
        } else {
            setReadingList(prevList => [...prevList, book]);
        }
    };

    const handleRemoveBook = (book: Book) => {
        setReadingList(prevList => prevList.filter(b => b.title !== book.title));
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <>
                <Parallax />
                <div style={{ position: 'relative', zIndex: 10 }}>
                    <Container>
                        <Typography variant="h4" gutterBottom>
                            Book Assignment View
                        </Typography>
                        <BookSearch onSearch={setSearchQuery} />
                        {loading && <p>Loading...</p>}
                        {error && <p>Error loading books.</p>}
                        <BookList books={filteredBooks} onAdd={handleAddBook} />
                        <Typography variant="h5" gutterBottom>
                            Reading List
                        </Typography>
                        <ReadingList books={readingList} onRemove={handleRemoveBook} />
                    </Container>
                </div>
                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="warning">
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </>
        </ThemeProvider>
    );
};

export default App;
