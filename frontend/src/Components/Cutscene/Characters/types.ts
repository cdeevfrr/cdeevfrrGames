
// Characters are SVG elements, 
// always face left (parent components flip them to face the other way) 
// and take stage space of sizePx by 2 * sizePx (so the SVG viewbox should always be that size.)
export interface CharacterProps {
  mood: Mood;
  sizePx?: number,
}

export type Mood = 'neutral' | 'happy' | 'angry' | 'sad';




