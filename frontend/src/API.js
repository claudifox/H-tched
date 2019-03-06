const baseUrl = "http://localhost:3001/"

class API {
  static login(couple) {
    return fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(couple)
    }).then(response => response.json());
  }

  static create(couple) {
    return fetch(baseUrl + "couples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(couple)
    }).then(response => response.json());
  }

  static validate() {
    return this.get(baseUrl + "validate");
  }

  static getGuests() {
    return this.get(baseUrl + "guests");
  }

  static getRegistry() {
    return this.get(baseUrl + "registry");
  }

  static getItems() {
    return this.get(baseUrl + "items");
  }

  static get(url) {
    return fetch(url, {
      headers: {
        Authorization: localStorage.getItem("token"),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json());
  }
}

window.API = API;

export default API;
