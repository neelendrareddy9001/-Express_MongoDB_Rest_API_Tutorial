const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

//It will provide body parser
//Which will help to get the data from the Clients to Server
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRoutes"));

//Middleware Error Handler 
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
})
