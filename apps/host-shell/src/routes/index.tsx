import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <h2>Welcome to Zephyr Host Shell</h2>
      <p>A modular micro-frontend host application built with:</p>
      <ul>
        <li>Rsbuild - Fast build tool</li>
        <li>TanStack Router - Type-safe routing</li>
        <li>Oxlint - Fast linting</li>
        <li>TypeScript - Type safety</li>
      </ul>
    </div>
  );
}
