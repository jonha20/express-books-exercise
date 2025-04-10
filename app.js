const express = require("express");
const app = express(); // crear el servidor
const port = 3000;


app.use(express.json())



// GET http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

// Mi app va a estar escuchand en el puerto 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });