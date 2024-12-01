import { useModals } from '@/router';

export default function PostModal() {
  const modals = useModals();

  const handleClose = () => modals.close();

  return (
    <div className="fixed inset-0 bg-[#5b7083]/40">
      <div className="absolute inset-0 z-[-1]" onClick={handleClose} />
      <div className="bg-black w-full max-w-[600px] p-4 rounded-2xl mt-12 mx-auto" style={{ height: 300 }}>
        <h2>무슨 일이 일어나고 있나요?</h2>
        <button onClick={() => modals.close()}>Close</button>
      </div>
    </div>
  );
}
