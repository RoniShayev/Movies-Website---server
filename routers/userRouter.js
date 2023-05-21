const userBL = require('../models/userBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let users = await userBL.getUsers();
  return resp.json(users);
  
})

router.get('/:userid', async function(req, resp)
{
  let userid = req.params.userid;
  let user = await userBL.getUser(userid);
  return resp.json(user);
})

router.post('/', async function(req,resp)
{
  let use = req.body;
  let userid = await userBL.addUser(use)
  return resp.json(userid);
})

router.put('/:userid', async function(req,resp)
{
  let use = req.body;
  let userid = req.params.userid;
  await userBL.updateUser(use,userid)
  return resp.json("Updated !");
})

router.delete('/:userid', async function(req,resp)
{
  let userid = req.params.userid;
  await userBL.deleteUser(userid)
  return resp.json("Deleted !");
})


module.exports = router