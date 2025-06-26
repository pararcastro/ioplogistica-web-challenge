import { describe, test, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    const mockOnSearch = vi.fn();

    beforeEach(() => {
    mockOnSearch.mockClear()
  })

    const defaultProps = {
        onSearch: mockOnSearch,
        totalSearchResults: 0,
        queryValue: ''
    }    

    test(' renders serach input with placeholder', () => {
        render(<SearchBar {...defaultProps}/>)

        expect(screen.getByPlaceholderText('Buscar personaje...')).toBeInTheDocument()
    })

    test('Calls onSearch when user types', async () => {
        render(<SearchBar {...defaultProps}/>)


        const searchInput = screen.getByTestId('search-bar')
        fireEvent.change(searchInput, { target: { value: 'Goku' } })
    
        expect(mockOnSearch).toHaveBeenCalledWith('Goku')
        expect(mockOnSearch).toHaveBeenCalledTimes(1)
    })


    test('shows results count when totalSearchResults > 0', () => {
        const propsWithResults = {
            ...defaultProps,
            totalSearchResults: 5
        }
        
        render(<SearchBar {...propsWithResults}/>)
        
        expect(screen.getByText('5')).toBeInTheDocument()
        expect(screen.getByText('RESULTS')).toBeInTheDocument()
    })

    test('does not show results count when totalSearchResults is 0', () => {
        render(<SearchBar {...defaultProps}/>)
        expect(screen.queryByText('RESULTS')).not.toBeInTheDocument()
    })

})