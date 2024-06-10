import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import ReadingList from "../components/Book/ReadingList";

const books = [
    { title: 'Book 1', author: 'Author 1', coverPhotoURL: 'url1' },
    { title: 'Book 2', author: 'Author 2', coverPhotoURL: 'url2' },
];

describe('ReadingList Component', () => {
    test('renders books', () => {
        render(
            <ThemeProvider theme={theme}>
                <ReadingList books={books} onRemove={jest.fn()} />
            </ThemeProvider>
        );

        expect(screen.getByText('Book 1')).toBeInTheDocument();
        expect(screen.getByText('Book 2')).toBeInTheDocument();
    });

    test('opens confirmation dialog when remove button is clicked', () => {
        render(
            <ThemeProvider theme={theme}>
                <ReadingList books={books} onRemove={jest.fn()} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getAllByText('Remove from Reading List')[0]);
        expect(screen.getByText('Are you sure you want to remove "Book 1" from your reading list?')).toBeInTheDocument();
    });

    test('calls onRemove when confirmed in dialog', () => {
        const onRemove = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <ReadingList books={books} onRemove={onRemove} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getAllByText('Remove from Reading List')[0]);
        fireEvent.click(screen.getByText('Confirm'));
        expect(onRemove).toHaveBeenCalledWith(books[0]);
    });
});
