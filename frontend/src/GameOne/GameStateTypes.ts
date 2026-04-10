/**
 * Everything in this file is a type that can be saved directly to the database as JSON.
 */

import { cutscenes } from "../Components/Cutscene/Cutscenes";


export interface Settings {
        volume: number,
}

export type Color = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type GemUUID = string

export interface Gem {
    id: GemUUID,
    species: number,
    growthType: number,
    size: number,
    level: number,
    exp: number,
    floorModifier: number // between 0 and 10,
    countModifier: number // between .2 and 5; linear scaling effect based on the number of orbs matched this turn.
    gainModifier: number // between .5 and 2; exponential scaling effect based on the number of matches this turn. should be opposite from countModifier.
    baseAttackColors: Array<Color>,
    baseBlockColors: Array<Color>,
    attachedFragments: Array<FragmentUUID>,
}

export type FragmentUUID = string

export interface Fragment {
    id: FragmentUUID,
    species: number,
    color: Color,
    size: number,
}

export interface Polish {
    species: number,
    color?: Color,
}

export interface PlayerInfo {
        viewedCutscenes:Set<keyof typeof cutscenes>,
        currentView: 'base' | 'dungeon' | 'battle',
        exp: number,
        level: number,
        mana: number, 
        Inventory: {
            Gems: Array<Gem>
            looseFragments: Array<Fragment>
            party: Array<GemUUID>
        },
        baseMaxMiasmaShield: number,
}

export interface DungeonInfo {
    mapSeed: number, // can generate tile (x,y) from this seed.
    runInventory: { // What did the player pickup _this_ run
        exp: number,
        drops: Array<Gem | Fragment>
        polishes: Array<Polish>
    }
    PlayerLocation: {
        x: number,
        y: number,
    }
    ClearedLocations: Array<{x: number, y: number}>
}

export type OrbUUID = string
export interface Orb {
    id: OrbUUID,
    color: Color,
}

export interface BattleInfo {
    currentMiasmaShield: number,
    turnNumber: number,
    orbGrid: Array<Array<Orb>>
    tempGlobalEffects: Array<{
        effectType: number, // or something else describing the effect
        turnsLeft: number,
    }>
    tempGemEffects: {
        partyIndex: Array<{
            effectType: number,
            turnsLeft: number,
        }>
    }
    opponent: {
        gem: Gem,
        behaviorSeed: number,
    }
}

export interface GameState {
    playerInfo: PlayerInfo,
    dungeonInfo: DungeonInfo | null,
    battleInfo: BattleInfo | null,
}

export function createBaseGameState (): GameState {
    return {
        battleInfo: null,
        dungeonInfo: null,
        playerInfo: {
            baseMaxMiasmaShield: 5,
            currentView: 'base',
            exp: 0,
            level: 0, 
            Inventory: {
                Gems: [],
                looseFragments: [],
                party: [],
            },
            mana: 0,
            viewedCutscenes: new Set<keyof typeof cutscenes>(),
        }
    }
}