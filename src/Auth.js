import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';

const { protocol, host } = window.location;
const redirectUri = `${protocol}//${host}/callback`;
console.log('REDIRECT_URI', redirectUri);

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'meguiluzortiz.us.auth0.com',
    clientID: 'I3LrxjpHgEmjsyLQqmdpZckrW6XAkvOA',
    responseType: 'token id_token',
    redirectUri,
  });

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, result) => {
        if (err) {
          console.error(err);
          reject(err);
        }

        if (result) {
          const { accessToken, idToken, expiresIn } = result;
          const expiresAt = JSON.stringify(expiresIn) * 1000 + new Date().getTime();
          localStorage.setItem('access_token', accessToken);
          localStorage.setItem('id_token', idToken);
          localStorage.setItem('expires_at', expiresAt);
          resolve();
        }
      });
    });
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  getProfile() {
    if (localStorage.getItem('id_token')) {
      return jwtDecode(localStorage.getItem('id_token'));
    }

    return {};
  }
}
