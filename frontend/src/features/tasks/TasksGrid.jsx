import { Loader2, Inbox } from "lucide-react";
import { Spinner } from "../../components/ui/spinner";
import TaskCard from "./TaskCard";

export default function TaskGrid({ tasks, loading, error, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
        {error}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-20 text-center text-muted-foreground">
        <Inbox className="h-10 w-10" />
        <p>No tasks yet. Create your first one!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
