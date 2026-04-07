import { User } from "firebase/auth";
import { Stage } from "../Components/Cutscene/Stage";
import { Guard } from "../Components/Cutscene/Characters/Guard";

export function GameOne({user}:{user: User}) {
    return <div
        style= {{
            backgroundImage: 'url(/assets/backgrounds/Gemini_Generated_Cave.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh', // Ensure the div has height to actually show the image
            width: '100vw'
        }}
    >
        <Stage 
        text="Welcome to the game" 
        characters={[
            {image: Guard, mood: 'happy', name: 'Guard', sizePx: 100, xOffsetPercent: 80,}
        ]}
        speaker={0}
        />  
        </div>
}