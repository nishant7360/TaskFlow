import { Pencil, Trash2, Calendar } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const STATUS_STYLES = {
  Todo: "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-500/15 dark:text-slate-300 dark:border-slate-500/30",
  "In Progress":
    "bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30",
  Completed:
    "bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30",
};

const PRIORITY_STYLES = {
  Low: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/15 dark:text-slate-300 dark:border-slate-500/30",
  Medium:
    "bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-500/15 dark:text-amber-400 dark:border-amber-500/30",
  High: "bg-red-50 text-red-700 border-red-300 dark:bg-red-500/15 dark:text-red-400 dark:border-red-500/30",
};

const PRIORITY_ACCENT = {
  Low: "before:bg-slate-300 dark:before:bg-slate-600",
  Medium: "before:bg-amber-400 dark:before:bg-amber-500",
  High: "before:bg-red-500 dark:before:bg-red-500",
};

const STATUS_DOT = {
  Todo: "bg-slate-400 dark:bg-slate-500",
  "In Progress": "bg-blue-500",
  Completed: "bg-emerald-500",
};

function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function TaskCard({ task, onEdit, onDelete }) {
  const { title, description, status, priority, dueDate } = task;

  return (
    <Card
      className={`relative flex h-full flex-col overflow-hidden pl-1 shadow-sm transition-all before:absolute before:inset-y-0 before:left-0 before:w-1 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md ${PRIORITY_ACCENT[priority]}`}
    >
      <CardHeader className="space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-2 text-base leading-snug">
            {title}
          </CardTitle>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className={`gap-1.5 font-medium ${STATUS_STYLES[status]}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`}
            />
            {status}
          </Badge>
          <Badge
            variant="outline"
            className={`font-medium ${PRIORITY_STYLES[priority]}`}
          >
            {priority}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {description ? (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {description}
          </p>
        ) : (
          <p className="text-sm italic text-muted-foreground/60">
            No description
          </p>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t pt-3">
        {dueDate ? (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(dueDate)}
          </span>
        ) : (
          <span className="text-xs text-muted-foreground/50">No due date</span>
        )}

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            aria-label="Edit task"
            onClick={() => onEdit(task)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            aria-label="Delete task"
            onClick={() => onDelete(task)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
