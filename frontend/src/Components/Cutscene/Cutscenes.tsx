import { Fluffy } from "./Characters/Fluffy";
import { DialogueFrame } from "./DialogueFrame";

export type Cutscene = Array<Parameters<typeof DialogueFrame>[0]>

export const CutsceneFluffyIntro: Cutscene = [
    {
        text: "Hi! I'm Fluffy!",
        characters: [
            { image: Fluffy, mood: 'neutral', name: 'Fluffy', xOffsetPercent: 60, }
        ],
        speaker: 0
    },
    {
        text: "I'll be teaching you to purify taint from gems, and pulling you out of the dungeon if your magic meter falls to 0.",
        characters: [
            { image: Fluffy, mood: 'neutral', name: 'Fluffy', xOffsetPercent: 60, }
        ],
        speaker: 0
    },
]