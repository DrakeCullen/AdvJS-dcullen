import { render, screen } from '@testing-library/react';
import HomeScreen from '../Components/HomeScreen';

test('renders the home screen and check for play button', () => {
    render(<HomeScreen />);
    const submitBtn = screen.getByRole('button', {
        name: /play/i
      });
    expect(submitBtn).toBeInTheDocument();
});

test('renders the home screen and check for high score button', () => {
    render(<HomeScreen />);
    const leader = screen.getByRole('button', {
        name: /view leaderboard/i
      });
    expect(leader).toBeInTheDocument();
});