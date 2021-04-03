import { render, screen } from '@testing-library/react';
import Cloud from '../Components/Cloud';

test('renders one cloud', () => {
    let clouds = [];
    clouds.push([{ 'left': 200 }, { 'right': 300 }]);
    render(<Cloud clouds={clouds} />);
    const cloudText = screen.getByAltText(/cloud/i); // case insensitive regex
    expect(cloudText).toBeInTheDocument();
});


test('renders two clouds', () => {
    let clouds = [];
    clouds.push([{ 'left': 200 }, { 'right': 300 }]);
    clouds.push([{ 'left': 205 }, { 'right': 303 }]);
    render(<Cloud clouds={clouds} />);
    const cloudText = screen.getAllByAltText(/cloud/i); // case insensitive regex
    expect(cloudText[0]).toBeInTheDocument();
    expect(cloudText[1]).toBeInTheDocument();
});