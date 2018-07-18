class ApplicationServices {
  constructor(api) {
    this.api = api;
    return this;
  }
  async authenticate(credentials) {
    return this.api.create().post("authenticate", credentials);
  }

  getSession(token) {
    return this.api.create({ cookies: token }).get("session", token);
  }
  getInvitatation(id) {
    return this.api.create().get(`invitation/${id}`);
  }

  newUser(payload) {
    return this.api.create().post(`invitation`,payload);
  }
}

export default ApplicationServices
