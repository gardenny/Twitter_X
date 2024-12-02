import { Tweet } from "@/icons";
import { useModals } from "@/router";

export default function PostButton() {
  const { open } = useModals();

  return (
    <button
      className="flex-center h-12 w-12 max-w-60 rounded-full bg-primary font-bold transition-opacity hover:opacity-80 xl:w-full xl:px-6 xl:py-4"
      onClick={() => open("/post", { replace: true, viewTransition: true })}
    >
      <span className="hidden xl:block">게시하기</span>
      <Tweet className="block h-6 w-6 fill-white-light xl:hidden" />
    </button>
  );
}
