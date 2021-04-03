import { render, screen } from '@testing-library/react';
import Player from '../Components/Player';

test('renders a player facing left', () => {
    render(<Player x={20} y={80} direction={"left"} />);
    const playerText = screen.getByAltText(/left/i); // case insensitive regex
    expect(playerText).toBeInTheDocument();
});

test('renders a player facing right', () => {
    render(<Player x={20} y={80} direction={"right"} />);
    const playerText = screen.getByAltText(/right/i); // case insensitive regex
    expect(playerText).toBeInTheDocument();
});