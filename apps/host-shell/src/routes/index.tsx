import { createFileRoute } from '@tanstack/react-router';
import { Card, CardHeader, CardTitle, CardContent } from 'ui-kit/components';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Welcome to Zephyr Host Shell</h2>
      <p className="mb-4">A modular micro-frontend host application built with:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Rsbuild - Fast build tool</li>
        <li>TanStack Router - Type-safe routing</li>
        <li>Oxlint - Fast linting</li>
        <li>TypeScript - Type safety</li>
        <li>Tailwind CSS v4 - Utility-first styling with dark/light theme</li>
      </ul>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Theme Toggle</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Click the theme toggle button in the header to switch between light and dark modes.</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Light mode: White background (#ffffff) with dark text (#333333)</li>
            <li>Dark mode: Black background (#000000) with white text (#ffffff)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
