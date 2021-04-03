import { render, screen } from '@testing-library/react';
import Score from '../Components/Score';

test('renders the score and check for name', () => {
    render(<Score score={50}/>);
    const name = screen.getByText(/score/i); // case insensitive regex
    expect(name).toBeInTheDocument();
});

test('renders the score and check for score', () => {
    render(<Score score={50}/>);
    const score = screen.getByText(/50/i); // case insensitive regex
    expect(score).toBeInTheDocument();
});