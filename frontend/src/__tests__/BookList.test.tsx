import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import BookList from "../components/Book/BookList";

const books = Array.from({ length: 12 }, (_, i) => ({
    title: `Book ${i + 1}`,
    author: `Author ${i + 1}`,
    coverPhotoURL: `url${i + 1}`,
}));

describe('BookList Component', () => {
    test('renders books and pagination', () => {
        const onAdd = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <BookList books={books} onAdd={onAdd} />
            </ThemeProvider>
        );

        // Check initial books rendered
        expect(screen.getAllByText(/Book/)).toHaveLength(9);

        // Check pagination
        fireEvent.click(screen.getByRole('button', { name: /2/i }));
        expect(screen.getAllByText(/Book/)).toHaveLength(3);
    });

    test('calls onAdd when add button is clicked', () => {
        const onAdd = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <BookList books={books} onAdd={onAdd} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getAllByText('Add to Reading List')[0]);
        expect(onAdd).toHaveBeenCalledTimes(1);
    });
});
