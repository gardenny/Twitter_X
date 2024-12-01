import { Search } from '@/icons';

export default function SearchBox() {
  return (
    <div className="w-[350px] flex-center gap-3 bg-[#202327] px-6 py-3 rounded-full">
      <Search width={16} height={16} />
      <input placeholder="Search" />
    </div>
  );
}
