import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import BookCard from "../components/Book/BookCard";

const book = {
    title: 'Test Book',
    author: 'Test Author',
    coverPhotoURL: 'test-url',
};

describe('BookCard Component', () => {
    test('renders book details', () => {
        render(
            <ThemeProvider theme={theme}>
                <BookCard {...book} onAdd={jest.fn()} />
            </ThemeProvider>
        );

        expect(screen.getByText('Test Book')).toBeInTheDocument();
        expect(screen.getByText('Test Author')).toBeInTheDocument();
    });

    test('calls onAdd when add button is clicked', () => {
        const onAdd = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <BookCard {...book} onAdd={onAdd} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Add to Reading List'));
        expect(onAdd).toHaveBeenCalledTimes(1);
    });

    test('calls onRemove when remove button is clicked', () => {
        const onRemove = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <BookCard {...book} onRemove={onRemove} />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Remove from Reading List'));
        expect(onRemove).toHaveBeenCalledTimes(1);
    });
});
