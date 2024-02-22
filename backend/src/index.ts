import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "APi is ruunnnig" });
});

app.listen(3000, () => {
  console.log("App is running on Port 3000");
});
