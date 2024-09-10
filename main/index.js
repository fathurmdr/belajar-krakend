import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
  const start = Date.now();

  res.on("finish",()=>{
    const duration = Date.now() - start;
    console.log(`Method: ${req.method} | Path: ${req.originalUrl} | Status: ${res.statusCode} | Duration: ${duration}`);
  })

  next()
})

app.get("/", (req, res) => {
  res.json({
    data: "Hello Main World!",
  });
});

app.use((err, req, res, next)=>{
  if (!err) {
    next();
    return;
  }

  console.error({
    message: err.message,
    detail: err.stack,
    ip: req.ip,
    method: req.method,
    path: req.originalUrl,
  });

  res.status(400).json({
    errorMsg: err.message
  })
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
