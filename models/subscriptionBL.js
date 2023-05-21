const Subscription = require('./subscriptionModel');

const getSubscriptions = () =>
{
  return Subscription.find({})
  
}


const getSubscription = (id) =>
{
  return Subscription.findById(id)
}

const addSubscription = async (sub) =>
{
    let newsub = new Subscription(sub);
    await newsub.save();
    return newsub._id
}

const updateSubscription = async (sub, id) =>
{
    await Subscription.findByIdAndUpdate(id,sub)
}

const deleteSubscription = async (id) =>
{
    await Subscription.findByIdAndDelete(id)
}

module.exports = {getSubscriptions,getSubscription,addSubscription,updateSubscription,deleteSubscription};