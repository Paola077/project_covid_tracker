import { render, screen } from "@testing-library/react";
import LogoWhite from "../../components/logoWhite/LogoWhite";
import { test } from "vitest";

test('LogoWhite component', () => {
  ('renders an image with correct , id, and alt text', () => {
 
    render(<LogoWhite />);

 
    const imageElement = screen.getByAltText('Logo');


    expect(imageElement).toBeInTheDocument();

    
    expect(imageElement).toHaveAttribute('id', 'logoCovid');
  });
});
