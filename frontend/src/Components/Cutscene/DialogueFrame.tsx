// Stage.js
import { CharacterProps, Mood } from "./Characters/types";
import { DialogueBox } from "./DialogueBox";

interface CharacterEntry {
    image: React.ComponentType<CharacterProps>;
    name: string;
    mood: Mood;
    /**
     * 50, not .5
     */
    xOffsetPercent: number;
    facing?: 'left' | 'right';
}


export function DialogueFrame({
    characters,
    speaker,
    text,
}: {
    characters: Array<CharacterEntry>,
    speaker: number; // Index of the character currently speaking
    text: string,
}) {
    return (
        <div style={{
            position: 'fixed',
            inset: 0, // Top, Right, Bottom, Left = 0
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darkens the background game
            display: 'flex',
            flexDirection: 'column',
            zIndex: 900, // Sit on top of the game
            pointerEvents: 'all', // Blocks clicks to the game underneath
        }}>


            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {characters.map((char, index) => {
                    const CharacterComponent = char.image;
                    const isSpeaking = index === speaker;

                    // Flip logic: SVGs face left by default. 
                    // If facing right, we flip the X axis.
                    const flipScale = char.facing === 'right' ? -1 : 1;

                    return (
                        <div
                            key={`${char.name}-${index}`}
                            style={{
                                position: 'absolute',
                                bottom: '15%', 
                                left: `${char.xOffsetPercent}%`,
                                width: `30%`,
                                // We combine the flip with a slight tilt for the speaker later
                                transform: `translateX(-50%) scaleX(${flipScale}) ${isSpeaking ? 'rotate(-2deg)' : 'rotate(0deg)'}`,
                                transition: 'all 0.3s ease', // smooths out movements
                                zIndex: isSpeaking ? 10 : 1, // Speaker stays on top
                                opacity: isSpeaking ? 1 : 0.8, // Dim non-speakers slightly
                            }}
                        >
                            <CharacterComponent mood={char.mood} sizePx={100} />
                        </div>
                    );
                })}
            </div>

            {/* Dialogue Overlay */}
            <DialogueBox
                speaker={characters[speaker]?.name}
                text={text}
            />

        </div>
    );
};
