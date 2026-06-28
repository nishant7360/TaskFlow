import { Search, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { ModeToggle } from "../components/ModeToggle";
import { Button } from "./ui/button";
import { useTaskContext } from "@/context/TaskContext";

export default function Navbar() {
  const { searchQuery, setSearchQuery, openCreateDialog } = useTaskContext();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400 text-sm font-bold text-primary-foreground">
            T
          </span>
          <span className="text-lg font-semibold text-foreground">
            TaskFlow
          </span>
        </a>

        <div className="mx-auto w-full max-w-md flex-1">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button
            onClick={openCreateDialog}
            className="bg-orange-400 hover:bg-amber-300"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
