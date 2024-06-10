import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import BookSearch from "../components/Book/BookSearch";

describe('BookSearch Component', () => {
    test('renders search input', () => {
        render(
            <ThemeProvider theme={theme}>
                <BookSearch onSearch={jest.fn()} />
            </ThemeProvider>
        );

        expect(screen.getByLabelText('Search Books')).toBeInTheDocument();
    });

    test('calls onSearch when input value changes', () => {
        const onSearch = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <BookSearch onSearch={onSearch} />
            </ThemeProvider>
        );

        fireEvent.change(screen.getByLabelText('Search Books'), { target: { value: 'test' } });
        expect(onSearch).toHaveBeenCalledWith('test');
    });
});
