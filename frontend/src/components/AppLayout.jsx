import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { TaskProvider } from "../context/TaskContext.jsx";

export default function AppLayout() {
  return (
    <TaskProvider>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </TaskProvider>
  );
}
