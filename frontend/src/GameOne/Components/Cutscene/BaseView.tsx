import React from "react";
import { PlayerInfo } from "../../GameStateTypes";
import { ThemeStyles } from "../../../Theme";

interface BaseViewProps {
  playerInfo: PlayerInfo;
  onEnterDungeon: () => void;
  onOpenInventory: () => void;
  onOpenPartyMenu: () => void;
  onCombineGems: (gemId: string, fragmentId: string) => void;
}

export function BaseView({ 
  playerInfo, 
  onEnterDungeon, 
  onOpenInventory, 
  onOpenPartyMenu 
}: BaseViewProps) {
  return (
    <div style={ThemeStyles.pageWrapper}>
      {/* Top Bar: Player Stats */}
      <header style={ThemeStyles.header}>
        <div style={styles.statGroup}>
          <span style={styles.label}>LVL {playerInfo.level}</span>
          <div style={styles.progressBarContainer}>
            <div style={{ ...styles.progressBar, width: `${(playerInfo.exp % 100)}%`, backgroundColor: '#FFD700' }} />
          </div>
        </div>
        <div style={styles.statGroup}>
          <span style={styles.label}>MANA: {playerInfo.mana}</span>
        </div>
      </header>

      {/* Center: Main Navigation Actions */}
      <main style={styles.mainContent}>
        <h1 style={styles.title}>Sanctuary</h1>
        
        <div style={styles.buttonStack}>
          <button style={styles.primaryButton} onClick={onEnterDungeon}>
            ENTER DUNGEON
          </button>
          
          <div style={styles.buttonRow}>
            <button style={styles.secondaryButton} onClick={onOpenInventory}>
              INVENTORY
            </button>
            <button style={styles.secondaryButton} onClick={onOpenPartyMenu}>
              PARTIES
            </button>
          </div>
        </div>
      </main>

      {/* Footer: Quick Party Summary */}
      <footer style={styles.footer}>
        <div style={styles.partyPreview}>
          <span style={styles.labelSmall}>Current Party:</span>
          {playerInfo.Inventory.party.map((uuid) => (
            <div key={uuid} style={styles.partySlot} title={uuid}>
              {/* This would eventually be a Gem Icon component */}
              💎
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  statGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '3rem',
    textShadow: '2px 2px 8px #000',
    marginBottom: '2rem',
    letterSpacing: '4px',
  },
  buttonStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '400px',
  },
  buttonRow: {
    display: 'flex',
    gap: '10px',
  },
  primaryButton: {
    padding: '20px',
    fontSize: '1.5rem',
    backgroundColor: '#8b0000',
    color: 'white',
    border: '2px solid #ff4500',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 4px 0 #4d0000',
    fontWeight: 'bold',
  },
  secondaryButton: {
    flex: 1,
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    border: '1px solid #34495e',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    padding: '15px',
    background: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '8px 8px 0 0',
  },
  partyPreview: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  partySlot: {
    width: '40px',
    height: '40px',
    backgroundColor: '#333',
    border: '1px solid #555',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#aaa',
  },
  labelSmall: {
    fontSize: '0.7rem',
    color: '#888',
    textTransform: 'uppercase',
  },
  progressBarContainer: {
    width: '120px',
    height: '8px',
    backgroundColor: '#222',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    transition: 'width 0.3s ease',
  }
};