const express = require("express")

const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect(" mongodb://127.0.0.1:27017/masai", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology:true
        
    });
}


//First create the schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    course: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: false },
    batch: { type: String, required: true },
    teacher: { type: String, required: true },
    
})


//create model
const User = mongoose.model("user", userSchema)




const app = express();
app.use(express.json())

//for getting all users
app.get("/users", async(req, res) => {
    
    //console.log(users)
   
        const user = await User.find().lean().exec()
        //return res.status(200).json({ user });
    res.send(user)
   
})
//to add users
app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json({ user });
})


//to get user greater than 18
app.get("/users/age" ,async (req, res) => {
    const user = await User.find({ age: { $gt: 18 } }).lean().exec();
    return res.status(200).json({ user });
})


//to get user opted full-stack
app.get("/users/course", async (req, res) => {
     const user = await User.find({ course: { $eq: "Full-Stack" } }).lean().exec();
     return res.status(200).json({ user });
})




//to get men users
app.get("/users/gender/male", async (req, res) => {
     const user = await User.find({ gender: { $eq: "male" } }).count().lean().exec();
     return res.status(200).json({ user });
})



// to get female users
app.get("/users/gender/female", async (req, res) => {
     const user = await User.find({ gender: { $eq: "female" } }).count().lean().exec();
     return res.status(200).json({ user });
})


//to get total number of users
app.get("/users/count", async (req, res) => {
     const user = await User.find().count().lean().exec();
     return res.status(200).json({ user });
})


//to get user taught by aman
app.get("/users/aman", async (req, res) => {
     const user = await User.find({ teacher: { $eq: "aman" } }).count().lean().exec();
     return res.status(200).json({ user });
})

//to get user taught by ankush
app.get("/users/ankush", async (req, res) => {
     const user = await User.find({ teacher: { $eq: "ankush" } }).count().lean().exec();
     return res.status(200).json({ user });
})

//to update the data
app.patch("/users/:id" ,async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
     return res.status(200).json({ user });
})

//to delete the data
app.delete("/users/:id" ,async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
     return res.status(200).json({ user });
})



app.listen(3045, async function() {
    await connect();
    console.log("listening to port 3045")
})