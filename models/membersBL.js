const Member = require('./membersModel');

const getMembers = () =>
{
  return Member.find({})
  
}


const getMember = (id) =>
{
  return Member.findById(id)
}

const addMember = async (mem) =>
{
    let newmem = new Member(mem);
    await newmem.save();
    return newmem._id
}

const updateMember = async (mem, id) =>
{
    await Member.findByIdAndUpdate(id,mem)
}

const deleteMember = async (id) =>
{
    await Member.findByIdAndDelete(id)
}

module.exports = {getMembers,getMember,addMember,updateMember,deleteMember};