import UserRepository from "../repository/UserRepository.js";

export const UserController = {
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const responseData = UserRepository.create({
        username,
        password,
      });

      res.send({
        status: true,
        id: responseData,
        message: "Register succesfull",
      });
    } catch (error) {
      res.send({
        status: false,
        message: error.message,
      });
    }
  },

  async login(req, res) {
    try {
        const {username, password} = req.body
        const responseData=UserRepository.login({username, password})

        res.send({
            status: true,
            message: "Login succesfull",
            data: responseData
        });
    } catch (error) {
        res.send({
            status: false,
            message: `Error ${error.message}`
        });
    }
  },
};
