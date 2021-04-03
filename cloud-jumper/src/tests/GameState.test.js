import { render, screen } from '@testing-library/react';
import GameState from '../Components/GameState';

test('renders the home screen and check for title', () => {
    render(<GameState />);
    const title = screen.getByText(/Cloud Jumper/i); // case insensitive regex
    expect(title).toBeInTheDocument();
});

test('renders the home screen and check for developer', () => {
    render(<GameState />);
    const developer = screen.getByText(/Drake Cullen/i); // case insensitive regex
    expect(developer).toBeInTheDocument();
});
