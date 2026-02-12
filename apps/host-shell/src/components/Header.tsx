import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex items-center justify-between">
      <h1 className="m-0 font-semibold text-2xl text-red-500">LakeTest</h1>
      <ThemeToggle />
    </nav>
  );
}
