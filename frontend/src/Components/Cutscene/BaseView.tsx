import { PlayerInfo } from "../../GameOne/GameStateTypes";

export function BaseView({playerInfo}: {playerInfo: PlayerInfo}){
    return <div style={styles.pageWrapper}>Base view</div>
}

const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    margin: 0,
    minHeight: '100vh',
  }
};