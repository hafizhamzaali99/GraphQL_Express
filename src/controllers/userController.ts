import Users from "../models/userModel.js";

const getAllUsers = async () => {
  try {
    let usersData = await Users.find();
    //   usersData = tokenRemover(usersData);
    return usersData;
  } catch (error) {
    return console.log("error", error);
  }
};

const getUserByID = async (parent: any, arg: { id: String }) => {
  let user = await Users.findById(arg.id);
  return user;
};



export { getAllUsers, getUserByID};
