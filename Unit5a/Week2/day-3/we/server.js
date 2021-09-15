const express = require("express")

const mongoose = require("mongoose")

const connect = () => {
    // return mongoose.connect("mongodb://127.0.0.1:27017/express-mongoose-ninjas", {
    return mongoose.connect("mongodb://127.0.0.1:27017/movies", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true

    } )
}



const app = express();
app.use(express.json())


//first step create schema

const movieSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    movie_name: { type: String, required: true },
    movie_genres: { type: String, required: true },
    production_year: { type: Number, required: false },
    budget: { type: Number, required: true }
        
})

//second step create a model
const Movie = mongoose.model("movie", movieSchema)

// get all users
app.get("/movies", async(req, res) => {
    const movies = await Movie.find().lean().exec()
    res.send(movies);
})

app.post("/movies", async(req, res) => {
    const movie = await Movie.create(req.body)
    res.status(201).json({movie});
})

app.get("/movies/:id", async(req, res) => {
    const movie = await Movie.findById(req.params.id)
    res.status(200).json({movie});
})

app.patch("/movies/:id", async(req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json({movie});
})


app.delete("/movies/:id", async(req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).json({movie});
})


app.listen(2445, async function () {
    await connect();
    console.log("listening for 2445")
})