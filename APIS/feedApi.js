const exp=require('express');
const feedApi = exp.Router();
const expressAsyncHandler = require('express-async-handler');
const { MdFastRewind } = require('react-icons/md');
feedApi.use(exp.json());
feedApi.use(exp.urlencoded());

feedApi.post(
    '/add-feed',
    expressAsyncHandler(async(request,response)=>{
    let userfeedbackObject=request.app.get("userfeedbackObject")
    let newFeedObj=request.body;
    let userOfDB=await userfeedbackObject.findOne({cityName:newFeedObj.cityName})
    if(userOfDB!==null){
        userOfDB.feeds.push({message:newFeedObj.message,username:newFeedObj.username});
        let newFeed = userOfDB.feeds;
        await userfeedbackObject.updateOne({cityName:userOfDB.cityName},{$set:{feeds:newFeed}})
        response.send({message:"new city added"})
    }
    else{
        let newCity = {
            cityName:newFeedObj.cityName,
            feeds:[{message:newFeedObj.message, username: newFeedObj.username}]
        }
        await userfeedbackObject.insertOne(newCity);
        response.send({message:"user created successfully"})
    }
}))
feedApi.get('/getfeeds/:name',expressAsyncHandler(async(request,response)=>{
    const name=request.params.name;
    let userfeedbackObject=request.app.get("userfeedbackObject");
    let feedObj=await userfeedbackObject.findOne({cityName:name});
    if(feedObj==null){
        response.send({message:"feeds doesnot exist.."})
    }
    else{
        response.send({message:"Feeds Available.." , payload:feedObj.feeds})
    }
}))
module.exports=feedApi;
