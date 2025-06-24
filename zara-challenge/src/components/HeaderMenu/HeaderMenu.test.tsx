import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import HeaderMenu from './HeaderMenu';
import CharacterContext from '../../context/CharactersContext';
import { type Character } from '../../interfaces';

type CharacterContextType = {
    likedCharacters: Character[];
    handleLike: (character: Character) => void;
};

const mockContextValue: CharacterContextType = {
    likedCharacters: [],
    handleLike: vi.fn(),
};

const renderWithProviders = (contextValue = mockContextValue) => {
    return render(
        <BrowserRouter>
            <CharacterContext.Provider value={contextValue}>
                <HeaderMenu />
            </CharacterContext.Provider>
        </BrowserRouter>
    );
};

describe('HeaderMenu', () => {
    test('renders logo and favourites button', () => {
        renderWithProviders();

        expect(screen.getByAltText('go home button logo')).toBeInTheDocument();
        expect(screen.getByAltText('favourites button')).toBeInTheDocument();
    });

    test('it has zero favourites displayed in the counter when no favourites added', () => {
        renderWithProviders();
        const counter = screen.getByTestId('fav-counter');

        expect(counter).toHaveTextContent('0');
    });

    test('shows correct count when there are liked characters', () => {
        const mockCharacter1 = {
            id: 1,
            name: 'Goku',
            image: 'goku.jpg',
            description: 'Main character',
        };
        const mockCharacter2 = {
            id: 2,
            name: 'Vegeta',
            image: 'vegeta.jpg',
        };

        const contextWithFavorites = {
            likedCharacters: [mockCharacter1, mockCharacter2],
            handleLike: vi.fn(),
        };

        renderWithProviders(contextWithFavorites);

        expect(screen.getByText('2')).toBeInTheDocument();
    });

    test('has correct navigation links', () => {
        renderWithProviders();

        const homeLink = screen.getByAltText('go home button logo').closest('a');
        const favoritesLink = screen.getByAltText('favourites button').closest('a');

        expect(homeLink).toHaveAttribute('href', '/');
        expect(favoritesLink).toHaveAttribute('href', '/favourites');
    });
});
