import { render, screen } from '@testing-library/react';
import Instructions from '../Components/Instructions';

test('renders the instruction and check for title', () => {
    render(<Instructions />);
    const title = screen.getByText(/Instructions/i); // case insensitive regex
    expect(title).toBeInTheDocument();
});

test('renders the instruction and check for cloud info', () => {
    render(<Instructions />);
    const cloud = screen.getByText(/land on clouds/i); // case insensitive regex
    expect(cloud).toBeInTheDocument();
});