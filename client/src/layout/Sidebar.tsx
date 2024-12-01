import { SearchBox } from '@/components';

export default function Sidebar() {
  return (
    <aside className="flex-center w-[350px] h-full">
      <div className="fixed top-0 py-3">
        <SearchBox />
      </div>
    </aside>
  );
}
