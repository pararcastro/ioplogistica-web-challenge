import { describe, test, expect, vi, beforeEach } from 'vitest'
import { DragonBallAPI } from '../../services/apiService'

// Mock global fetch
globalThis.fetch = vi.fn()


describe('DragonBallAPI', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('getCharacters returns character data', async () => {
    const mockResponse = {
      items: [
        { id: 1, name: 'Goku', image: 'goku.jpg' },
        { id: 2, name: 'Vegeta', image: 'vegeta.jpg' }
      ]
    }
    
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    } as Response)

    const result = await DragonBallAPI.getCharacters()

    expect(fetch).toHaveBeenCalledWith('https://dragonball-api.com/api/characters?limit=50')
    expect(result).toEqual(mockResponse)
  })

  test('getCharacters throws error when fetch fails', async () => {
    // Mock failed fetch
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 500
    } as Response)

    await expect(DragonBallAPI.getCharacters()).rejects.toThrow('Error al obtener personajes')
  })
})