import { User } from "firebase/auth";
import { hitBackend } from "../APIs/Backend";
import { Link } from "react-router-dom";
import { ThemeStyles } from "../Theme";


export function LandingPage({
    user,
    signOutUser
}: {
    user: User,
    signOutUser: () => void
}){
    return (
        <div style={ThemeStyles.pageWrapper}>
            <h2>Welcome, {user.displayName}</h2>
            <button onClick={signOutUser}>Sign out</button>

            <Link to="/game-one">
                <button>
                    Start Game 1
                </button>
            </Link>

            <Link to="/divide">
                <button>
                    Start Divide
                </button>
            </Link>
        </div>
    );
}
