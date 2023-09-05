//create express app
const exp=require('express');
const app=exp();
const mclient=require("mongodb").MongoClient;

require('dotenv').config()

const path=require('path');

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'./build')))




//Db connection url
const DBurl=process.env.DATABASE_CONNECTION_URL

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

    //get DB object
    let dbObj=client.db("registration")

    //create collection object
    let usercollectionObject=dbObj.collection("usercollection")
    let userfeedbackObject = dbObj.collection("userfeedback");


    //sharing collection objects to APIs
    app.set("usercollectionObject",usercollectionObject);
    app.set("userfeedbackObject",userfeedbackObject);

    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))


const userApp=require('./APIS/userApi');
const feedApi=require('./APIS/feedApi');

app.use('/user-api',userApp);
app.use('/feed-api',feedApi);

app.use('*',(request , response )=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
});


app.use((request , response ,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})


app.use(( error , request , response , next )=>{
    response.send({message:" Error occured ",reason:`${error.message} `})
})

const port=process.env.PORT
app.listen(port, ()=>console.log(`web server is listening on port ${port}`));