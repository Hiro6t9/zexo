
import { useState } from "react";
import { Header } from "@/components/Header";
import { UrlInput } from "@/components/UrlInput";
import { PlatformInfo } from "@/components/PlatformInfo";
import { DownloadOptions } from "@/components/DownloadOptions";
import { HowTo } from "@/components/HowTo";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

// Mock data for demonstration purposes
const mockDownloadOptions = {
  youtube: {
    title: "Sample YouTube Video",
    thumbnail: "https://source.unsplash.com/random/480x360?tech",
    options: [
      { url: "#", quality: "4K", format: "mp4", size: "512 MB" },
      { url: "#", quality: "2K", format: "mp4", size: "256 MB" },
      { url: "#", quality: "1080p", format: "mp4", size: "128 MB" },
      { url: "#", quality: "720p", format: "mp4", size: "64 MB" },
      { url: "#", quality: "High Quality", format: "mp3", size: "8 MB" },
      { url: "#", quality: "Medium Quality", format: "mp3", size: "4 MB" },
    ],
  },
  tiktok: {
    title: "Sample TikTok Video",
    thumbnail: "https://source.unsplash.com/random/480x720?social",
    options: [
      { url: "#", quality: "1080p", format: "mp4", size: "45 MB" },
      { url: "#", quality: "720p", format: "mp4", size: "25 MB" },
      { url: "#", quality: "540p", format: "mp4", size: "12 MB" },
    ],
  },
  pinterest: {
    title: "Sample Pinterest Content",
    thumbnail: "https://source.unsplash.com/random/600x800?design",
    options: [
      { url: "#", quality: "4K Original", format: "mp4", size: "120 MB" },
      { url: "#", quality: "2K", format: "mp4", size: "80 MB" },
      { url: "#", quality: "1080p", format: "mp4", size: "45 MB" },
      { url: "#", quality: "Original Quality", format: "jpg", size: "6 MB" },
      { url: "#", quality: "High Quality", format: "jpg", size: "2 MB" },
    ],
  },
  spotify: {
    title: "Sample Spotify Track",
    thumbnail: "https://source.unsplash.com/random/500x500?music",
    options: [
      { url: "#", quality: "320 kbps", format: "mp3", size: "12 MB" },
      { url: "#", quality: "256 kbps", format: "mp3", size: "9 MB" },
      { url: "#", quality: "192 kbps", format: "mp3", size: "7 MB" },
      { url: "#", quality: "128 kbps", format: "mp3", size: "5 MB" },
    ],
  },
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [platform, setPlatform] = useState<string | null>(null);
  const [downloadData, setDownloadData] = useState<any>(null);
  const { toast } = useToast();

  const detectPlatform = (url: string): string | null => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return "YouTube";
    } else if (url.includes("tiktok.com")) {
      return "TikTok";
    } else if (url.includes("pinterest.com")) {
      return "Pinterest";
    } else if (url.includes("spotify.com") || url.includes("open.spotify")) {
      return "Spotify";
    }
    return null;
  };

  const handleSubmit = (url: string) => {
    const detectedPlatform = detectPlatform(url);
    
    if (!detectedPlatform) {
      toast({
        title: "Unsupported URL",
        description: "Please provide a valid YouTube, TikTok, or Pinterest URL.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setPlatform(detectedPlatform);
    
    // In a real app, you would make an API call to fetch download options
    // For demo purposes, we'll use mock data and simulate a loading delay
    setTimeout(() => {
      let mockData;
      
      switch (detectedPlatform.toLowerCase()) {
        case "youtube":
          mockData = mockDownloadOptions.youtube;
          break;
        case "tiktok":
          mockData = mockDownloadOptions.tiktok;
          break;
        case "pinterest":
          mockData = mockDownloadOptions.pinterest;
          break;
        case "spotify":
          mockData = mockDownloadOptions.spotify;
          break;
        default:
          mockData = null;
      }
      
      setDownloadData(mockData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container px-4 py-12 flex flex-col items-center gap-12">
        <div className="text-center max-w-2xl mb-2">
          <h2 className="text-3xl font-bold mb-4">Download Videos & Music</h2>
          <p className="text-muted-foreground mb-6">
            Free online downloader for YouTube, TikTok, and Pinterest content without watermarks
          </p>
          <UrlInput onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
        
        {(isLoading || downloadData) && (
          <DownloadOptions
            isLoading={isLoading}
            platform={platform || ""}
            mediaTitle={downloadData?.title}
            thumbnailUrl={downloadData?.thumbnail}
            downloadOptions={downloadData?.options}
          />
        )}
        
        <HowTo />
        
        <div className="w-full max-w-4xl">
          <Separator className="my-8 bg-white/10" />
        </div>
        
        <PlatformInfo />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
