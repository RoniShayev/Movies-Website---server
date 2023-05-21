const subscriptionBL = require('../models/subscriptionBL')
const express = require('express');

const router = express.Router();


router.get('/', async function(req, resp)
{
  let subs = await subscriptionBL.getSubscriptions();
  return resp.json(subs);
  
})

router.get('/:subid', async function(req, resp)
{
  let subid = req.params.subid;
  let subs = await subscriptionBL.getSubscription(subid);
  return resp.json(subs);
})

router.post('/', async function(req,resp)
{
  let sub = req.body;
  let subid = await subscriptionBL.addSubscription(sub)
  return resp.json(subid);
})

router.put('/:subid', async function(req,resp)
{
  let sub = req.body;
  let subid = req.params.subid;
  await subscriptionBL.updateSubscription(sub,subid)
  return resp.json("Updated !");
})

router.delete('/:subid', async function(req,resp)
{
  let subid = req.params.subid;
  await subscriptionBL.deleteSubscription(subid)
  return resp.json("Deleted !");
})


module.exports = router