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

app.post("/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json({ user });
})

app.get("/users" ,async (req, res) => {
    const user = await User.find({ age: { $gt: 18 } }).lean().exec();
    res.send(user)
})






app.listen(3045, async function() {
    await mongoose.connect();
    console.log("listening to port 3045")
})