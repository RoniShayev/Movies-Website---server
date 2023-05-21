const memberBL = require('../models/membersBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let members = await memberBL.getMembers();
  return resp.json(members);
  
})

router.get('/:memberid', async function(req, resp)
{
  let memberid = req.params.memberid;
  let member = await memberBL.getMember(memberid);
  return resp.json(member);
})

router.post('/', async function(req,resp)
{
  let mem = req.body;
  let memberid = await memberBL.addMember(mem)
  return resp.json(memberid);
})

router.put('/:memberid', async function(req,resp)
{
  let mem = req.body;
  let memberid = req.params.memberid;
  await memberBL.updateMember(mem,memberid)
  return resp.json("Updated !");
})

router.delete('/:memberid', async function(req,resp)
{
  let memberid = req.params.memberid;
  await memberBL.deleteMember(memberid)
  return resp.json("Deleted !");
})


module.exports = router