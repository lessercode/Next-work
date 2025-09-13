import { Clock } from 'lucide-react';
import { CategorizeWebsiteDialog } from '../dashboard/categorize-website-dialog';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">
            WebTime Tracker
          </h1>
        </div>
        <CategorizeWebsiteDialog />
      </div>
    </header>
  );
}
