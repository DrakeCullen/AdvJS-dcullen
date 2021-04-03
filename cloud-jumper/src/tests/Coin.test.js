import { render, screen } from '@testing-library/react';
import Coin from '../Components/Coin';

test('renders one coin', () => {
    let coins = [];
    coins.push([{ 'left': 200 }, { 'right': 300 }]);
    render(<Coin coins={coins} />);
    const coinText = screen.getByAltText(/coin/i); // case insensitive regex
    expect(coinText).toBeInTheDocument();
});


test('renders two coins', () => {
    let coins = [];
    coins.push([{ 'left': 200 }, { 'right': 300 }]);
    coins.push([{ 'left': 100 }, { 'right': 30 }]);
    render(<Coin coins={coins} />);
    const coinText = screen.getAllByAltText(/coin/i); // case insensitive regex
    expect(coinText[0]).toBeInTheDocument();
    expect(coinText[1]).toBeInTheDocument();
});