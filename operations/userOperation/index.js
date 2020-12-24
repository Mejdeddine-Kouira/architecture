const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class UserOperation extends Operation {
  constructor() {
    super();
    this.userService = require("../../services").userService;
  }

  async getUsers() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const users = await this.userService.getUsers();
      this.emit(SUCCESS, users);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addUser(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.addUser(payload);
      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getUserById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.getUserById(_id);
      if (!user) {
        throw ErrorUtil.createNotFoundError({
          details: "User not found. Please register"
        });
      }
      this.emit(SUCCESS, user);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
}

UserOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = UserOperation;
