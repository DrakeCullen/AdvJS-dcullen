import { render, screen } from '@testing-library/react';
import HighScoreForm from '../Components/HighScoreForm';

test('renders the high score form and check for title', () => {
    render(<HighScoreForm />);
    const title = screen.getByText(/New High Score/i); // case insensitive regex
    expect(title).toBeInTheDocument();
});

test('renders the high score form and check for input box', () => {
    render(<HighScoreForm />);
    const inputForm = screen.getByRole('textbox'); // case insensitive regex
    expect(inputForm).toBeInTheDocument();
});
