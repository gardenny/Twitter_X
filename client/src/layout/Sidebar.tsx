export default function Sidebar() {
  return (
    <aside className="lg:flex-center hidden h-screen w-[330px]">
      <div className="flex h-full w-full flex-col gap-4 px-3 py-4 text-sm font-bold">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-primary px-3 py-2 transition-opacity hover:opacity-80">
              로그인
            </button>
            <button className="rounded-full bg-primary px-3 py-2 transition-opacity hover:opacity-80">
              회원가입
            </button>
          </div>

          <button className="text-3xl">🌙</button>
        </div>

        <div className="rounded-2xl bg-black-light px-4 py-5">
          나를 위한 트렌드
        </div>

        <div className="rounded-2xl bg-black-light px-4 py-5">팔로우 추천</div>
      </div>
    </aside>
  );
}
