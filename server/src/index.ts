import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import router from "./router";

const app = express();
const path = require("path");
const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

app.use("/", router());
