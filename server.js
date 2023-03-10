const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//It will provide body parser
//Which will help to get the data from the Clients to Server
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
})