import { Fluffy } from "./Characters/Fluffy";
import { Narrator } from "./Characters/Narrator";
import { DialogueFrame } from "./DialogueFrame";

export type Cutscene = Array<Parameters<typeof DialogueFrame>[0]>

export const CutsceneFluffyIntro: Cutscene = [
    {
        text: "Hiya! I'm Fluffy!",
        characters: [
            { image: Fluffy, mood: 'neutral', name: 'Fluffy', xOffsetPercent: 60, }
        ],
        speaker: 0
    },
    {
        text: "I'll be teaching you to clean the haze from gems. Oh, and if your magic shielding hits zero, I'll hop in and bring you to safety before the miasma sets in.",
        characters: [
            { image: Fluffy, mood: 'neutral', name: 'Fluffy', xOffsetPercent: 60, }
        ],
        speaker: 0
    },
    {
        text: "You can use a purified gem to defeat a hazy gem! And once purified, the world can use the gem to push back the Blorg's Miasma. Here's a small purified gem to get you started.",
        characters: [
            { image: Fluffy, mood: 'neutral', name: 'Fluffy', xOffsetPercent: 60, }
        ],
        speaker: 0
    },
    {
        text: "Anyway, experience is best teacher! Go ahead into the dungeon and try to remove some haze!",
        characters: [
            { image: Fluffy, mood: 'neutral', name: 'Fluffy', xOffsetPercent: 60, }
        ],
        speaker: 0
    },
]


export const CutsceneStartGame: Cutscene = [
    {
        text: "The world has been heavy lately. A weight no one could quite name until the dungeons opened. ",
        characters: [
            { image: Narrator, mood: 'neutral', name: 'Narrator', xOffsetPercent: 0, }
        ],
        speaker: 0
    },
    {
        text: "Our new friends from the stars explained it all: a creature called the Blorg is poisoning our world with numbing Miasma.",
        characters: [
            { image: Narrator, mood: 'neutral', name: 'Narrator', xOffsetPercent: 0, }
        ],
        speaker: 0
    },
    {
        text: "But crystals from the dungeons can push the dark back! We just need Heroes brave enough to head into the deep, scrub the gems clean, and bring a little hope back to the surface.",
        characters: [
            { image: Narrator, mood: 'neutral', name: 'Narrator', xOffsetPercent: 0, }
        ],
        speaker: 0
    },
    {
        text: "...",
        characters: [
            { image: Narrator, mood: 'neutral', name: 'Narrator', xOffsetPercent: 0, }
        ],
        speaker: 0
    },
    ...CutsceneFluffyIntro
]



