import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '../components/Header';
import { ThemeProvider } from '../components/ThemeProvider';

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </ThemeProvider>
  ),
});
