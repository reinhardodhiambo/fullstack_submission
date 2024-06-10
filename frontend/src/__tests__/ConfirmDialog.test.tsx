import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import ConfirmDialog from "../components/Book/ConfirmDialog";

describe('ConfirmDialog Component', () => {

    test('calls onConfirm when confirm button is clicked', () => {
        const onConfirm = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <ConfirmDialog
                    open={true}
                    bookTitle="Confirm Removal"
                    onConfirm={onConfirm}
                    onClose={jest.fn()}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Confirm'));
        expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    test('calls onCancel when cancel button is clicked', () => {
        const onCancel = jest.fn();
        render(
            <ThemeProvider theme={theme}>
                <ConfirmDialog
                    open={true}
                    bookTitle="Confirm Removal"
                    onConfirm={jest.fn()}
                    onClose={onCancel}
                />
            </ThemeProvider>
        );

        fireEvent.click(screen.getByText('Cancel'));
        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});
