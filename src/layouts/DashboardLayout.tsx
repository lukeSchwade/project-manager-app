//Persistent dashboard on right side of page for easy nav

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar onOpenReminders={function (): void {
              throw new Error("Function not implemented.");
          } } />
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;