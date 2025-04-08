import React, { useEffect, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { authConfig } from '../config/auth';
import './SocialLogin.css';

// Add Facebook SDK types
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

interface SocialLoginProps {
  onGoogleSuccess?: (response: any) => void;
  onGoogleError?: () => void;
  onFacebookSuccess?: (response: any) => void;
  onFacebookFailure?: (error: any) => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  onGoogleSuccess,
  onGoogleError,
  onFacebookSuccess,
  onFacebookFailure,
}) => {
  const [isFBInitialized, setIsFBInitialized] = useState(false);
  const [fbError, setFbError] = useState<string | null>(null);

  const initializeFacebookSDK = () => {
    if (window.FB) {
      window.FB.init({
        appId: authConfig.facebook.appId,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });

      // Check login status
      window.FB.getLoginStatus((response: any) => {
        console.log('FB Login Status:', response);
        setIsFBInitialized(true);
      });
    }
  };

  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      // Remove any existing FB SDK
      const existingScript = document.getElementById('facebook-jssdk');
      if (existingScript) {
        existingScript.remove();
      }

      window.fbAsyncInit = function() {
        initializeFacebookSDK();
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode?.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    if (!window.FB) {
      loadFacebookSDK();
    } else {
      initializeFacebookSDK();
    }

    // Cleanup function
    return () => {
      setFbError(null);
    };
  }, []);

  const handleFacebookLogin = () => {
    setFbError(null);

    if (!isFBInitialized) {
      const error = 'Facebook SDK not initialized';
      console.error(error);
      setFbError(error);
      onFacebookFailure?.({ error });
      return;
    }

    window.FB.login((response: any) => {
      console.log('FB Login Response:', response);

      if (response.authResponse) {
        // Get user info
        window.FB.api('/me', { fields: 'name,email,picture' }, (userInfo: any) => {
          console.log('FB User Info:', userInfo);
          onFacebookSuccess?.({
            ...response.authResponse,
            ...userInfo
          });
        });
      } else {
        const error = `Login failed: ${response.status}`;
        console.error(error, response);
        setFbError(error);
        onFacebookFailure?.(response);
      }
    }, { scope: 'public_profile,email' });
  };

  return (
    <div className="social-login-container">
      <div className="social-login-title">Sign in with</div>
      {fbError && (
        <div className="error-message">
          {fbError}
        </div>
      )}
      <div className="social-login-buttons">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            onGoogleSuccess?.(credentialResponse);
          }}
          onError={() => {
            onGoogleError?.();
          }}
        />
        <button
          onClick={handleFacebookLogin}
          className="facebook-login-button"
          disabled={!isFBInitialized}
        >
          {isFBInitialized ? 'Continue with Facebook' : 'Loading Facebook...'}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;