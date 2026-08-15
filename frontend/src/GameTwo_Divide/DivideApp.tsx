import { User } from "firebase/auth";
import { ThemeStyles } from "../Theme";


export function DivideApp({user}:{user: User}){
    return <div style={ThemeStyles.pageWrapper}>
        Starter page for Divide
    </div>
}