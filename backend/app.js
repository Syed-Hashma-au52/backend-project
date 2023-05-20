import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user_routes";
import adminRouter from "./routes/admin_routes";
import movieRouter from "./routes/movie_routes";
import bookingsRouter from "./routes/booking_routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);


mongoose
   .connect
    (`mongodb+srv://itshashma18:${process.env.MONGODB_PASSWORD}@cluster0.m1x8svz.mongodb.net/?retryWrites=true&w=majority`
    )

.then(() =>
app.listen(8000, () =>
  console.log("Connected To Database And Server is running")
)
)
.catch((e) => console.log(e));


// K7vNtmsDfk9K99Tj