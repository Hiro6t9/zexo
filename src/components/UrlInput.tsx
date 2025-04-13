
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CircleCheck, Loader2 } from "lucide-react";

interface UrlInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

export const UrlInput = ({ onSubmit, isLoading }: UrlInputProps) => {
  const [url, setUrl] = useState<string>("");
  const [detectedPlatform, setDetectedPlatform] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string | null>(null);
  const [isLoadingTitle, setIsLoadingTitle] = useState<boolean>(false);

  // Auto detect platform as user types
  useEffect(() => {
    if (!url.trim()) {
      setDetectedPlatform(null);
      setVideoTitle(null);
      return;
    }

    // Detect platform based on URL
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      setDetectedPlatform("YouTube");
      fetchVideoTitle(url);
    } else if (url.includes("tiktok.com")) {
      setDetectedPlatform("TikTok");
      fetchVideoTitle(url);
    } else if (url.includes("pinterest.com")) {
      setDetectedPlatform("Pinterest");
      fetchVideoTitle(url);
    } else if (url.includes("spotify.com") || url.includes("open.spotify")) {
      setDetectedPlatform("Spotify");
      fetchVideoTitle(url);
    } else {
      setDetectedPlatform(null);
      setVideoTitle(null);
    }
  }, [url]);

  // Mock function to simulate fetching title (in a real app, this would call an API)
  const fetchVideoTitle = (videoUrl: string) => {
    setIsLoadingTitle(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      let mockTitle = "";
      
      // Generate mock title based on platform
      if (videoUrl.includes("youtube")) {
        mockTitle = "YouTube Video - How to Build Amazing Websites";
      } else if (videoUrl.includes("tiktok")) {
        mockTitle = "TikTok - Creative Short Video #trending";
      } else if (videoUrl.includes("pinterest")) {
        mockTitle = "Pinterest - Amazing Design Ideas Collection";
      } else if (videoUrl.includes("spotify")) {
        mockTitle = "Spotify - Your Favorite Music Track";
      }
      
      setVideoTitle(mockTitle);
      setIsLoadingTitle(false);
    }, 800);
  };

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
      case "Spotify":
        return "text-green-500";
      default:
        return "text-violet-accent";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Paste YouTube, TikTok, Pinterest or Spotify URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-14 text-base glass-morphism border-violet-secondary/30 focus:border-violet-primary bg-black/20 pl-4 pr-12"
          />
          {detectedPlatform && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <CircleCheck className={`h-5 w-5 ${getPlatformColor()}`} />
              <span className="text-xs font-medium text-violet-muted">{detectedPlatform}</span>
            </div>
          )}
        </div>
        
        {(isLoadingTitle || videoTitle) && (
          <div className="pl-1 -mt-2 animate-fade-in">
            {isLoadingTitle ? (
              <div className="flex items-center gap-2 text-violet-muted">
                <Loader2 className="h-3 w-3 animate-spin" />
                <span className="text-xs">Fetching title...</span>
              </div>
            ) : (
              <div className="text-sm font-medium text-violet-accent">
                {videoTitle}
              </div>
            )}
          </div>
        )}
        
        <Button 
          type="submit" 
          disabled={isLoading || !url.trim()} 
          className="h-12 px-6 btn-glow btn-glow-purple"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Download <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
