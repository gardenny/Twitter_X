import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "@/layout";

export default function AppLayout() {
  return (
    <Suspense fallback="Loading...">
      <div className="container mx-auto flex h-screen xl:max-w-[1200px]">
        <Header />

        <main className="h-screen w-full max-w-[600px] overflow-y-auto border-x border-white-dark px-4">
          <Outlet />
        </main>

        <Sidebar />
      </div>
    </Suspense>
  );
}
