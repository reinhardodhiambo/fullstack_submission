import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { useBooks } from '../hooks/useBooks';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

jest.mock('../hooks/useBooks');

const mockUseBooks = useBooks as jest.MockedFunction<typeof useBooks>;

describe('App Component', () => {
    beforeEach(() => {
        mockUseBooks.mockReturnValue({
            books: [
                { title: 'Book 1', author: 'Author 1', coverPhotoURL: 'url1' },
                { title: 'Book 2', author: 'Author 2', coverPhotoURL: 'url2' },
            ],
            loading: false,
            error: undefined,
        });
    });

    test('renders Book Assignment View', () => {
        render(
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        );
        expect(screen.getByText('Book Assignment View')).toBeInTheDocument();
    });

});
