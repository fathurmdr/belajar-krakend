import express from "express";

const app = express();

app.use(express.json());

app.get("/admin", (req, res) => {
  res.json({
    data: "Hello Admin World!",
  });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
