import { Header, Sidebar } from '@/layout';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="max-w-[1260px] margin-auto">
      <Header />

      <main className="flex-between ml-[280px] h-screen">
        <section className="w-full max-w-[600px] border-x border-white-dark">
          <Outlet />
        </section>

        <Sidebar />
      </main>
    </div>
  );
}
