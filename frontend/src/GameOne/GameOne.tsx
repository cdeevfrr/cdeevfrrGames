import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { CutsceneManager } from "../Components/Cutscenes/CutsceneManager";
import { cutscenes } from "./Components/Cutscene/Cutscenes";
import { createBaseGameState, GameState } from "./GameStateTypes";
import { BaseView } from "./Components/BaseView";
import { DungeonView } from "./Components/DungeonView";
import { BattleView } from "./Components/BattleView";

export function GameOne({user}:{user: User}) {
    const [activeCutsceneIndex, setActiveCutsceneIndex] = useState<keyof typeof cutscenes | null>(null);
    const [gameState, setGameState] = useState<GameState>(createBaseGameState());

    useEffect(() => {
        // Load game state from database.
        // If not found, create the starting game state.
    }, [])

    // Play the intro if needed.
    if (!activeCutsceneIndex && gameState.playerInfo.currentView === "base" && !gameState.playerInfo.viewedCutscenes.has('intro')){
        setActiveCutsceneIndex('intro');
    }
    
    return <div
        style= {{
            backgroundImage: 'url(/assets/backgrounds/Gemini_Generated_Cave.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Ensure the div has height to actually show the image
            width: '100vw'
        }}
    >
        {gameState.playerInfo.currentView === 'base' && <BaseView 
            onCombineGems={() => {}}
            onEnterDungeon={() => {}}
            onOpenInventory={() => {}}
            onOpenPartyMenu={() => {}}
            playerInfo={gameState.playerInfo}
        />}
        {gameState.playerInfo.currentView === 'dungeon' && <DungeonView 
            dungeonInfo={gameState.dungeonInfo!} 
            playerInfo={gameState.playerInfo}
        />}
        {gameState.playerInfo.currentView === 'battle' && <BattleView 
            dungeonInfo={gameState.dungeonInfo!} 
            playerInfo={gameState.playerInfo}
            battleInfo={gameState.battleInfo!} 
        />}

        {activeCutsceneIndex && (
            <CutsceneManager 
                cutscene={cutscenes[activeCutsceneIndex]} 
                onComplete={() => {
                    setGameState((gameState) => {
                        return {
                            ...gameState,
                            playerInfo: {
                                ...gameState.playerInfo,
                                viewedCutscenes: new Set([...gameState.playerInfo.viewedCutscenes, activeCutsceneIndex])
                            }
                        }
                    })
                    setActiveCutsceneIndex(null)
                }} 
            />
        )}
    </div>
}