const express = require("express");
const cors = require("cors");
const port = 4000;
const app = express();
app.use(cors());
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
const Router = require("./routes/route");
app.use("/path", Router);
