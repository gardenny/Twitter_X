import { SearchBox } from '@/components';

export default function Index() {
  return (
    <div className="flex justify-between items-center px-5 py-2 border-b border-b-white-dark">
      <h2 className="my-3 text-lg font-bold">전체 트윗 (99)</h2>
      <SearchBox />
    </div>
  );
}
