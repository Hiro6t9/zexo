
import { Download } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Download className="h-8 w-8 text-zexo-600" />
          <h1 className="text-3xl font-bold zexo-gradient-text">
            Zexo Downloader
          </h1>
        </div>
      </div>
    </header>
  );
};
