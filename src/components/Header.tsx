
import { Download } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-8 bg-gradient-to-r from-violet-primary/20 via-black/0 to-violet-primary/20">
      <div className="container flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Download className="h-8 w-8 text-violet-accent animate-pulse-glow" />
          <h1 className="text-4xl font-bold violet-gradient-text tracking-tight">
            ZEXO
          </h1>
          <span className="text-xs font-light text-violet-muted mt-3 ml-1">Violet Luxe</span>
        </div>
      </div>
    </header>
  );
};
