import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import CharacterCard from "./CharacterCard";
import { type Character } from "../../interfaces";

const mockCharacter: Character = {
    id: 1,
    name: 'Goku',
    image: 'https://example.com/goku.jpg'
};

describe('CharacterCard', () => {
    const mockHandleLike = vi.fn();

    test('renders character information', () => {
        render(
            <BrowserRouter>
                <CharacterCard 
                    character={mockCharacter} 
                    handleLike={mockHandleLike} 
                />
            </BrowserRouter>
        );

        expect(screen.getByText('Goku')).toBeInTheDocument();
        expect(screen.getByAltText('Goku')).toHaveAttribute('src', 'https://example.com/goku.jpg');
    });

    test('calls handleLike button when is clicked', () => {
        render(
            <BrowserRouter>
                <CharacterCard 
                    character={mockCharacter} 
                    handleLike={mockHandleLike} 
                />
            </BrowserRouter>
        );

        const likeButton = screen.getByAltText('like button');
        fireEvent.click(likeButton);

        expect(mockHandleLike).toHaveBeenCalledWith(mockCharacter);
    });

    test('shows empty heart when character is not in favorites', () => {
        render(
            <BrowserRouter>
                <CharacterCard 
                    character={mockCharacter} 
                    likedCharacters={[]} 
                    handleLike={mockHandleLike} 
                />
            </BrowserRouter>
        );

        expect(screen.getByTestId('empty-heart')).toBeInTheDocument();
    });

     test('shows filled heart when character is in favorites', () => {
        render(
            <BrowserRouter>
                <CharacterCard 
                    character={mockCharacter} 
                    likedCharacters={[mockCharacter]} 
                    handleLike={mockHandleLike} 
                />
            </BrowserRouter>
        );

        expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
});
