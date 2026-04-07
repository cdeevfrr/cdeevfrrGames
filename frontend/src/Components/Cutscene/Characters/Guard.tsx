import { CharacterProps } from "./types";

export function Guard({
    mood,
}: CharacterProps) {
    const eyeY = mood === 'happy' ? 45 : 55;

    return (
        <svg
            viewBox="0 0 100 200"
            style={{ height: '100%', width: 'auto', filter: 'drop-shadow(2px 4px 6px black)' }}
        >
            {/* Body */}
            <path d="M20 180 Q50 20 80 180" fill="gray" stroke="black" vectorEffect="non-scaling-stroke" />
            {/* Eyes that react to props */}
            <circle cx="40" cy={eyeY} r="5" fill="white" />
            <circle cx="60" cy={eyeY} r="5" fill="white" />
        </svg>
    );
}