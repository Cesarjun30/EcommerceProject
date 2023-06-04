const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({limit:"10mb"}))

const PORT = process.env.PORT || 8080;

// app.get("/", (req, res) => {
//   res.send("Va corriendo");
// });

// app.post("/signup",(req, res) => {

//     console.log(req.body)
// });

app.listen(PORT, () => console.log("server esta ecuchando en port 8080"));
