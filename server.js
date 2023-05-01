const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const TasksRouter = require("./routes/tasks");

app.use(express.json());
app.use("/api/v1/tasks", TasksRouter);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);

        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
