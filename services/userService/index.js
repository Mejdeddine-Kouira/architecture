module.exports = new (class UserService {
  constructor() {
    this.user = require("../../models/user.model.js");
  }

  getUsers() {
    return this.user.find();
  }

  getUserById(_id) {
    return this.user.findById({ _id });
  }

  addUser(payload) {
    return this.user.create(payload);
  }
})();
