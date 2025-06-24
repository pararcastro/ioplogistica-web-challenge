export interface Character {
  id: number;
  name: string;
  image: string;
  description?: string;
}


export interface Transformation {
    id: string;
    name: string;
    image: string;
}
export interface CharacterDetail extends Character {
  transformations: Transformation[];
}

export interface CharacterCardProp {
  character: Character;
}