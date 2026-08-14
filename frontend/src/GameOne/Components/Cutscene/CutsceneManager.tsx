import { useState } from 'react';
import { DialogueFrame } from './DialogueFrame'; // Your renamed Stage component
import { Cutscene } from './Cutscenes';

export function CutsceneManager({ 
    cutscene, 
    onComplete 
}: {
    cutscene: Cutscene,
    onComplete: () => void
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < cutscene.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            onComplete(); // Close the cutscene
        }
    };

    const currentStep = cutscene[currentIndex];

    return (
        <div onClick={handleNext} style={{ cursor: 'pointer' }}>
            <DialogueFrame 
                characters={currentStep.characters}
                speaker={currentStep.speaker}
                text={currentStep.text}
            />
        </div>
    );
}