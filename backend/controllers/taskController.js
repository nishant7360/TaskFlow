import Task from "../models/task.model.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const createTask = asyncHandler(async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  const task = await Task.create({
    title,
    description,
    status,
    priority,
    dueDate,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "Task created successfully", task));
});

export const getAllTasks = asyncHandler(async (req, res) => {
  const { search, status, priority, sort, page = 1, limit = 10 } = req.query;

  const query = {};

  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (status) {
    query.status = status;
  }

  if (priority) {
    query.priority = priority;
  }

  let sortOption = { createdAt: -1 };

  if (sort === "oldest") {
    sortOption = { createdAt: 1 };
  }

  if (sort === "dueDate") {
    sortOption = { dueDate: 1 };
  }

  if (sort === "priority") {
    sortOption = { priority: -1 };
  }

  const totalTasks = await Task.countDocuments(query);

  const tasks = await Task.find(query)
    .sort(sortOption)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  return res.status(200).json(
    new ApiResponse(200, "Tasks fetched successfully", {
      totalTasks,
      currentPage: Number(page),
      totalPages: Math.ceil(totalTasks / limit),
      tasks,
    }),
  );
});

export const getTaskById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Task fetched successfully", task));
});

export const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Task updated successfully", task));
});

export const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    throw new ApiError(404, "Task not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Task deleted successfully", null));
});
