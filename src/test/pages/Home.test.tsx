import { describe, test, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { Home } from '../../pages/Home/Home'
import  {CharacterContext} from '../../context/Characters/CharactersContext'
import { DragonBallAPI } from '../../services/apiService'

// Mock del API
vi.mock('../../services/apiService')

describe('Home Integration', () => {
  const mockContextValue = {
    likedCharacters: [],
    handleLike: vi.fn()
  }

  test('loads and displays characters from API', async () => {
    
    vi.mocked(DragonBallAPI.getCharacters).mockResolvedValue({
      items: [
        { id: 1, name: 'Goku', image: 'goku.jpg' },
        { id: 2, name: 'Vegeta', image: 'vegeta.jpg' }
      ]
    })

    render(
      <BrowserRouter>
        <CharacterContext.Provider value={mockContextValue}>
          <Home />
        </CharacterContext.Provider>
      </BrowserRouter>
    )


    await waitFor(() => {
      expect(screen.getByText('Goku')).toBeInTheDocument()
      expect(screen.getByText('Vegeta')).toBeInTheDocument()
    })
  })
})