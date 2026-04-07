
export function DialogueBox({ speaker, text }: {speaker: string, text: string}) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80%',
      maxWidth: '800px',
      backgroundColor: 'rgba(20, 20, 25, 0.9)',
      border: '2px solid #555',
      borderRadius: '12px',
      padding: '20px',
      color: 'white',
      fontFamily: 'sans-serif',
      zIndex: 10
    }}>
      <div style={{ 
        fontWeight: 'bold', 
        color: '#ffcc00', 
        marginBottom: '8px',
        fontSize: '1.1rem' 
      }}>
        {speaker}
      </div>
      <p style={{ margin: 0, lineHeight: '1.5' }}>
        {text}
      </p>
    </div>
  );
}