import { Link } from '@/router';
import { Logo } from '@/icons';
import { Menu } from '@/layout';

export default function Header() {
  return (
    <header className="fixed top-0 w-[280px] h-full px-3 py-1">
      <nav className="flex-column gap-2">
        <Link to="/" className="flex-center w-14 h-14 rounded-full hover:bg-[#eff3f4]/10">
          <Logo />
        </Link>

        <Menu />
      </nav>
    </header>
  );
}
