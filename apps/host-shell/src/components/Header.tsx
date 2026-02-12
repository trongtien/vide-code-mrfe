import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <nav className="px-1.5 py-2 bg-[--bg-primary] text-[--color-primary] border-b boder-b-[--color-primary] flex items-center justify-between">
      <h1 className="m-0 font-semibold text-base">Networks</h1>
      <ThemeToggle />
    </nav>
  );
}
