interface FacebookLoginStatus {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse: {
    accessToken: string;
    expiresIn: string;
    signedRequest: string;
    userID: string;
  } | null;
}

interface FacebookUserInfo {
  id: string;
  name: string;
  email: string;
  picture: {
    data: {
      height: number;
      is_silhouette: boolean;
      url: string;
      width: number;
    };
  };
}

interface FacebookSDK {
  init(options: {
    appId: string;
    cookie?: boolean;
    xfbml?: boolean;
    version: string;
  }): void;

  login(
    callback: (response: FacebookLoginStatus) => void,
    options?: {
      scope: string;
      return_scopes?: boolean;
    }
  ): void;

  getLoginStatus(callback: (response: FacebookLoginStatus) => void): void;

  api<T>(
    path: string,
    params: { fields: string },
    callback: (response: T) => void
  ): void;
}

declare global {
  interface Window {
    FB: FacebookSDK;
    fbAsyncInit: () => void;
  }
}