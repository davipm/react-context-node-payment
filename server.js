import express from "express";
import dotenv from "dotenv";
import path from "path";
import "colors";
import morgan from "morgan";
import transactions from "./routes/transactions";
import connectDB from "./config/db";

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (res, req) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server in running ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold
  )
);
