// LogoWhite.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogoWhite from './LogoWhite';

describe('LogoWhite', () => {
    test('renders the logo with the correct attributes', () => {
        const { getByAltText } = render(<LogoWhite />);
        const logoElement = getByAltText('Logo');

        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('src', 'src/assets/img/logo-white.png');
        expect(logoElement).toHaveAttribute('id', 'logoCovid');
    });
});