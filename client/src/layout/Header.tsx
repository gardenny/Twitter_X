import { Link } from '@/router';
import { Logo } from '@/icons';
import { Menu } from '@/layout';
import { PostButton } from '@/components';

export default function Header() {
  return (
    <header className="fixed top-0 w-[280px] h-full px-3 py-1">
      <nav className="flex-column gap-1 mb-5">
        <Link to="/" className="flex-center w-12 h-12 rounded-full hover:bg-[#eff3f4]/10">
          <Logo />
        </Link>

        <Menu />
      </nav>

      <PostButton />
    </header>
  );
}
