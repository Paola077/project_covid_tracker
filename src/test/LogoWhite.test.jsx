import { render, screen } from "@testing-library/react";
import LogoWhite from "../components/logoWhite/LogoWhite";
import { test, expect } from "vitest";

test('LogoWhite component', () => {
    // Render the LogoWhite component
    render(<LogoWhite />);

    // Find the rendered image element by alt text
    const imgElement = screen.getByAltText('Logo');

    // Assert that the image element exists
    expect(imgElement).toBeInTheDocument();

    // Assert that the src attribute is correct
    expect(imgElement).toHaveAttribute('src', 'src/assets/img/logo-white.png');

    // Assert that the id attribute is correct
    expect(imgElement).toHaveAttribute('id', 'logoCovid');
});
