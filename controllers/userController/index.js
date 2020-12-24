const operations = require("../../operations");

module.exports = {
  async getUsers(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

    const users = await userOperation.getUsers();
  },

  async addUser(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

    const user = await userOperation.addUser(req.body);
  },

  async getUserById(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
    const user = await userOperation.getUserById(req.params);
  }
};
