export interface Character {
  id: number;
  name: string;
  image: string;
  description?: string;
}

export interface CharacterCardProp {
  character: Character;
}