import { useModals } from "@/router";

export default function PostModal() {
  const { close } = useModals();

  const handleClose = (): void =>
    close({ replace: true, viewTransition: true });

  return (
    <div className="fixed inset-0 bg-[#5b7083]/40">
      <div className="absolute inset-0 z-[-1]" onClick={handleClose} />
      <div
        className="mx-auto mt-12 w-full max-w-[600px] rounded-2xl bg-black p-4"
        style={{ height: 300 }}
      >
        <h2>무슨 일이 일어나고 있나요?</h2>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
