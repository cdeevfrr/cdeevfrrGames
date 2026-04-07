import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './APIs/Firebase';
import { signOutUser } from './APIs/auth-service';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GameOne } from './Pages/GameOne';
import { LoginView } from './Pages/LoginView';
import { LandingPage } from './Pages/LandingPage';


export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listener detects if a user is already logged in from a previous session
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div style={{ padding: '20px' }}>Checking authentication...</div>;

  return (
    <Routes>
      {/* Public Route: If not logged in, show Login. If logged in, go to Landing */}
      <Route 
        path="/" 
        element={!user ? <LoginView /> : <LandingPage user={user} signOutUser={signOutUser}/>} 
      />

      {/* Protected Route: Only accessible if user exists */}
      <Route 
        path="/game-one" 
        element={user ? <GameOne user={user}/> : <Navigate to="/" />} 
      />

      {/* 404 Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

}

const styles: Record<string, React.CSSProperties> = {
  pageWrapper: {
    margin: 0,
    minHeight: '100vh',
  }
};

export default App;
