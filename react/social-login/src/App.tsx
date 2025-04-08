import { useState } from 'react'
import './App.css'
import SocialLogin from './components/SocialLogin'
import { jwtDecode } from 'jwt-decode'

interface UserProfile {
  name: string;
  email: string;
  picture: string;
  provider: 'google' | 'facebook';
}

function App() {
  const [user, setUser] = useState<UserProfile | null>(null);

  const handleGoogleSuccess = (response: any) => {
    console.log('Google login success:', response);
    const decoded: any = jwtDecode(response.credential);
    setUser({
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
      provider: 'google'
    });
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
  };

  const handleFacebookSuccess = (response: any) => {
    console.log('Facebook login success:', response);
    setUser({
      name: response.name,
      email: response.email,
      picture: response.picture?.data?.url,
      provider: 'facebook'
    });
  };

  const handleFacebookFailure = (error: any) => {
    console.error('Facebook login failed:', error);
  };

  const handleLogout = () => {
    if (user?.provider === 'facebook' && window.FB) {
      window.FB.logout(() => {
        console.log('Facebook logout successful');
        setUser(null);
      });
    } else {
      setUser(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Social Login Demo</h1>
      {!user ? (
        <SocialLogin
          onGoogleSuccess={handleGoogleSuccess}
          onGoogleError={handleGoogleError}
          onFacebookSuccess={handleFacebookSuccess}
          onFacebookFailure={handleFacebookFailure}
        />
      ) : (
        <div className="user-profile">
          <div className="profile-header">
            <img src={user.picture} alt="Profile" className="profile-picture" />
            <div className="profile-info">
              <h2>Welcome, {user.name}!</h2>
              <p className="email">{user.email}</p>
              <p className="provider">Signed in with {user.provider}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default App
