export const ThemeStyles: Record<string, React.CSSProperties> = {
    pageWrapper: {
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'monospace',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.2)', // Overlay to make text pop against bg image
        padding: '20px',
        boxSizing: 'border-box',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '8px',
        border: '1px solid #444',
    },
    label: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: '#aaa',
    },
}