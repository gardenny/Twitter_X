import { Link } from "@/router";
import { Logo } from "@/icons";
import { Menu, Profile } from "@/layout";
import { PostButton } from "@/components";

export default function Header() {
  return (
    <header className="flex h-screen w-16 flex-col justify-between overflow-y-auto px-2 py-1 xl:w-[270px] xl:px-3">
      <div className="flex w-full flex-col items-center xl:items-start">
        <Link
          to="/"
          className="inline-block rounded-full p-2 hover:bg-white-light/10 hover:transition-colors"
        >
          <Logo className="h-8 w-8 fill-white-light" />
        </Link>

        <Menu />

        <PostButton />
      </div>

      <Profile />
    </header>
  );
}
