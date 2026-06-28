import { createContext, useContext, useState, useCallback } from "react";

const TaskContext = createContext(undefined);

export function TaskProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [createHandler, setCreateHandler] = useState(() => () => {});

  const registerCreateHandler = useCallback((fn) => {
    setCreateHandler(() => fn);
  }, []);

  const openCreateDialog = useCallback(() => {
    createHandler();
  }, [createHandler]);

  const value = {
    searchQuery,
    setSearchQuery,
    openCreateDialog,
    registerCreateHandler,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
}
