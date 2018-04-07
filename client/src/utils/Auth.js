class Auth {

    /**
     * Authenticate a user. Save a token string in Local Storage
     *
     * @param {string} token
     */
    static authenticateUser(authData) {
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user_id', authData.user.id);
        localStorage.setItem('email', authData.user.email);
        localStorage.setItem('bizName', authData.user.bizName);
        localStorage.setItem('coType', authData.user.coType);
      }

    /**
     * Check if a user is authenticated - check if a token is saved in Local Storage
     *
     * @returns {boolean}
     */
    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    /**
     * Deauthenticate a user. Remove a token from Local Storage.
     *
     */
    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    /**
     * Get a token value.
     *
     * @returns {string}
     */

    static getToken() {
        return localStorage.getItem('token');
    }

    /**
   * Get a user object.
   *
   * @returns {user}
   */
  static getUser() {
    if (localStorage.getItem('user_id')) {
      return {
        id: localStorage.getItem('user_id'),
        bizName: localStorage.getItem('bizName'),
        coType: localStorage.getItem('coType'),
        email: localStorage.getItem('email')
      }
    } else {
      return null;
    }
  }

}

export default Auth;