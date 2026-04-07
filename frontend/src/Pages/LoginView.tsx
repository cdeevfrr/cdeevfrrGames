import { signInWithGoogle } from "../APIs/auth-service";

export function LoginView() {
  return <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', fontFamily: 'sans-serif' }}>
    <h1>Firebase Template</h1>
    <button
      onClick={signInWithGoogle}
      style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
    >
      Sign in with Google
    </button>
  </div>
}