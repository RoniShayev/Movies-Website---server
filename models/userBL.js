const User = require('./userModel');

const getUsers = () =>
{
  return User.find({})
  
}


const getUser = (id) =>
{
  return User.findById(id)
}

const addUser = async (use) =>
{
    let newuse = new User(use);
    await newuse.save();
    return newuse._id
}

const updateUser = async (use, id) =>
{
    await User.findByIdAndUpdate(id,use)
}

const deleteUser = async (id) =>
{
    await User.findByIdAndDelete(id)
}

module.exports = {getUsers,getUser,addUser,updateUser,deleteUser};