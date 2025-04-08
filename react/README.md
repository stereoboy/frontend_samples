
## Social-login
```bash
npm create vite@latest social-login -- --template react-ts
```

```bash
cd social-login
npm install
```

```bash
npm install @react-oauth/google
//npm install react-facebook-login --legacy-peer-deps // deleted
npm install @mui/material @emotion/react @emotion/styled
```

```bash
npm install dotenv
```

```bash
mkdir .cert
openssl req -x509 -newkey rsa:2048 -keyout .cert/key.pem -out .cert/cert.pem -days 365 -nodes
```

### For Google Login:
- Go to the Google Cloud Console (https://console.cloud.google.com/)
- Create a new project
- Enable the Google+ API
- Create OAuth 2.0 credentials
- Add your domain to the authorized domains


### For Facebook Login:

- Go to Facebook Developers (https://developers.facebook.com/)
- Create a new app
- Get your App ID
- Replace YOUR_FACEBOOK_APP_ID in the SocialLogin.tsx file with your actual App ID
- Configure your OAuth redirect URIs

### Create `.env`
```javascript
VITE_FACEBOOK_APP_ID=YOUR_FACEBOOK_APP_ID
VITE_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
VITE_APP_URL=http://localhost:5173
```