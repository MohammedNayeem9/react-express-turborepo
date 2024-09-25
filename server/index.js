const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hola World!");
});

//test route for testing
app.get("/test", (req, res) => {
  res.send("This is a test route.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
