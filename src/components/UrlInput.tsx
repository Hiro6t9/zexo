
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export const UrlInput = ({ onSubmit, isLoading }: UrlInputProps) => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Paste YouTube, TikTok or Pinterest URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pr-12 h-12 text-base shadow-sm zexo-input-gradient"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !url.trim()} 
          className="h-12 px-6 zexo-gradient hover:opacity-90 transition-opacity"
        >
          {isLoading ? "Processing..." : (
            <>
              Download <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
