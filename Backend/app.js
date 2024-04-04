const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', userRoutes);


mongoose.connect(`mongodb+srv://Apple:1234@cluster0.jizqfv7.mongodb.net/expenseTrackerReact?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
    app.listen(4000);
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
