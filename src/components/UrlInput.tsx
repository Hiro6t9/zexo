
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CircleCheck } from "lucide-react";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export const UrlInput = ({ onSubmit, isLoading }: UrlInputProps) => {
  const [url, setUrl] = useState<string>("");
  const [detectedPlatform, setDetectedPlatform] = useState<string | null>(null);

  // Auto detect platform as user types
  useEffect(() => {
    if (!url.trim()) {
      setDetectedPlatform(null);
      return;
    }

    // Detect platform based on URL
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      setDetectedPlatform("YouTube");
    } else if (url.includes("tiktok.com")) {
      setDetectedPlatform("TikTok");
    } else if (url.includes("pinterest.com")) {
      setDetectedPlatform("Pinterest");
    } else if (url.includes("spotify.com") || url.includes("open.spotify")) {
      setDetectedPlatform("Spotify");
    } else {
      setDetectedPlatform(null);
    }
  }, [url]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  // Get platform color
  const getPlatformColor = () => {
    switch (detectedPlatform) {
      case "YouTube":
        return "text-red-500";
      case "TikTok":
        return "text-pink-500";
      case "Pinterest":
        return "text-red-600";
      default:
        return "text-green-500";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Paste YouTube, TikTok, Pinterest or Spotify URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pr-12 h-12 text-base shadow-lg border-indigo-900/50 focus:border-indigo-500 bg-black/20 backdrop-blur-sm"
          />
          {detectedPlatform && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <CircleCheck className={`h-5 w-5 ${getPlatformColor()}`} />
              <span className="text-xs font-medium text-muted-foreground">{detectedPlatform}</span>
            </div>
          )}
        </div>
        <Button 
          type="submit" 
          disabled={isLoading || !url.trim()} 
          className="h-12 px-6 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white hover:opacity-90 border-0 shadow-lg shadow-indigo-500/20"
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
