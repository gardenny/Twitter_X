import { useModals } from '@/router';

export default function PostButton() {
  const modals = useModals();

  return (
    <button
      className="bg-primary px-8 py-4 rounded-full w-full max-w-60 font-bold hover:opacity-85 hover:transition-opacity"
      onClick={() => modals.open('/post')}
    >
      게시하기
    </button>
  );
}
