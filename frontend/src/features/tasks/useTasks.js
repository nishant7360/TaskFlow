import { useState, useEffect, useCallback } from "react";
import { getAllTasks, createTask, updateTask, deleteTask } from "../tasks/api";

export function useTasks({ statusFilter, priorityFilter, sort, search } = {}) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const params = {};
      if (statusFilter && statusFilter !== "all") params.status = statusFilter;
      if (priorityFilter && priorityFilter !== "all")
        params.priority = priorityFilter;
      if (sort && sort !== "newest") params.sort = sort;
      if (search && search.trim()) params.search = search.trim();

      const res = await getAllTasks(params);
      setTasks(res?.data?.tasks ?? []);
    } catch (err) {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  }, [statusFilter, priorityFilter, sort, search]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = useCallback(
    async (formData) => {
      await createTask(formData);
      await fetchTasks();
    },
    [fetchTasks],
  );

  const editTask = useCallback(
    async (id, formData) => {
      await updateTask(formData, id);
      await fetchTasks();
    },
    [fetchTasks],
  );

  const removeTask = useCallback(
    async (id) => {
      await deleteTask(id);
      await fetchTasks();
    },
    [fetchTasks],
  );

  return {
    tasks,
    loading,
    error,
    refetch: fetchTasks,
    addTask,
    editTask,
    removeTask,
  };
}
