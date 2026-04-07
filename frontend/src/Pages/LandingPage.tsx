import { User } from "firebase/auth";
import { hitBackend } from "../APIs/Backend";
import { Link } from "react-router-dom";


export function LandingPage({
    user,
    signOutUser
}: {
    user: User,
    signOutUser: () => void
}){
    return (
        <div style={{ padding: '20px' }}>
            <h2>Welcome, {user.displayName}</h2>
            <button onClick={signOutUser}>Sign out</button>

            <div style={{ marginTop: '20px' }}>
                {/* This button now acts like a real URL link */}
                <Link to="/game-one">
                    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Start Game 1
                    </button>
                </Link>
            </div>
        </div>
    );
}
