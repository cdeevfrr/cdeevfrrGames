import { CharacterProps, Mood } from "./types";

const files: Record<Mood, string> = {
    angry: "/assets/characters/Fluffy/Gemini_Fluffy_determined.png",
    happy: "/assets/characters/Fluffy/Gemini_Fluffy_happy.png",
    neutral: "/assets/characters/Fluffy/Gemini_Fluffy_neutral.png",
    sad: "/assets/characters/Fluffy/Gemini_Fluffy_sad.png",
}

export function Fluffy({
    sizePx = 100,
    mood
}: CharacterProps) {
    
    return <img 
    src={files[mood]}
    alt="Fluffy Neutral"
    style={{width: '100%'}}
    ></img>
}