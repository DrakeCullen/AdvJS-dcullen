import { render, screen } from '@testing-library/react';
import ScoreBoard from '../Components/ScoreBoard';

test('renders the scoreboard and check for name Josh', () => {
    render(<ScoreBoard/>);
    const name = screen.getByText(/josh/i); // case insensitive regex
    expect(name).toBeInTheDocument();
});

test('renders the scoreboard and check for Josh score', () => {
    render(<ScoreBoard/>);
    const score = screen.getByText(/520/i); // case insensitive regex
    expect(score).toBeInTheDocument();
});