import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { CutsceneManager } from "../Components/Cutscene/CutsceneManager";
import { Cutscene, CutsceneFluffyIntro, CutsceneStartGame } from "../Components/Cutscene/Cutscenes";

export function GameOne({user}:{user: User}) {
    const [activeCutscene, setActiveCutscene] = useState<Cutscene | null>(null);

    useEffect(() => {
        setActiveCutscene(CutsceneStartGame)
    }, [])
    
    return <div
        style= {{
            backgroundImage: 'url(/assets/backgrounds/Gemini_Generated_Cave.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Ensure the div has height to actually show the image
            width: '100vw'
        }}
    >
        {activeCutscene && (
            <CutsceneManager 
                cutscene={activeCutscene} 
                onComplete={() => setActiveCutscene(null)} 
            />
        )}
    </div>
}