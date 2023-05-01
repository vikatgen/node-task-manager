const mongoose = require("mongoose");
const TaskScema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task name must be filled."],
        trim: true,
        minlength: [5, "Minimum character length is 5."],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Task", TaskScema);
