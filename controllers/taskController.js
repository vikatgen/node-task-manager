const Task = require("../models/Task");

const getAllTasks = async (request, response) => {
    try {
        const tasks = await Task.find();
        response.status(200).json({ tasks });
    } catch (error) {
        response.status(500).json({ error: error });
        throw new Error(error);
    }
};

const createTask = async (request, response) => {
    try {
        const task = await Task.create(request.body);
        response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ error: error });
        throw new Error(error);
    }
};

const getTask = async (request, response) => {
    try {
        const task = await Task.find({ _id: request.params.id });

        if (!task)
            response.status(404).json({
                message: `No task found with id ${request.params.id}`,
            });

        response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ error: error });
        throw new Error(error);
    }
};

const updateTask = async (request, response) => {
    try {
        const task = await Task.findByIdAndUpdate(
            { _id: request.params.id },
            request.body,
            { new: true, runValidators: true }
        );

        if (!task)
            response
                .status(404)
                .json({ message: `No task with id ${request.params.id}` });

        response.status(200).json({ task });
    } catch (error) {
        response.status(500).json({ error: error });
        throw new Error(error);
    }
};

const deleteTask = async (request, response) => {
    try {
        const task = await Task.findByIdAndDelete({ _id: request.params.id });

        if (!task)
            response
                .status(404)
                .json({ message: `No task with id ${request.params.id}` });

        response.status(200).json({ message: "Task removed successfully" });
    } catch (error) {
        response.status(500).json({ error: error });
        throw new Error(error);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
