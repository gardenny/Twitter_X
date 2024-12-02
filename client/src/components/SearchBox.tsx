import { Search } from '@/icons';

export default function SearchBox() {
  return (
    <div className="w-[320px] flex-center gap-3 bg-black-light px-6 py-3 rounded-full">
      <Search width={16} height={16} />
      <input placeholder="검색" />
    </div>
  );
}
