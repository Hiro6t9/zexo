
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Music, Video } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface DownloadItem {
  url: string;
  quality: string;
  format: string;
  size: string;
}

interface DownloadOptionsProps {
  isLoading: boolean;
  platform: string;
  mediaTitle?: string;
  thumbnailUrl?: string;
  downloadOptions?: DownloadItem[];
}

export const DownloadOptions = ({
  isLoading,
  platform,
  mediaTitle = "",
  thumbnailUrl = "",
  downloadOptions = [],
}: DownloadOptionsProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("video");

  const handleDownload = (url: string, format: string) => {
    // In a real app, you'd implement actual download functionality here
    console.log(`Downloading ${format} from ${url}`);
    
    // Mock download - in a real app you'd trigger the actual download
    const link = document.createElement("a");
    link.href = url;
    link.download = `zexo-download.${format.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isLoading && downloadOptions.length === 0) {
    return null;
  }

  const videoOptions = downloadOptions.filter((option) => option.format === "mp4");
  const audioOptions = downloadOptions.filter((option) => option.format === "mp3");

  return (
    <Card className="w-full max-w-2xl premium-card">
      <CardContent className="p-6">
        {isLoading ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-24 w-24 rounded-md" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-6">
              {thumbnailUrl && (
                <img
                  src={thumbnailUrl}
                  alt={mediaTitle}
                  className="h-24 w-24 object-cover rounded-md"
                />
              )}
              <div>
                <h3 className="font-medium text-lg line-clamp-2">{mediaTitle}</h3>
                <p className="text-sm text-gray-500">{platform}</p>
              </div>
            </div>

            {platform === "YouTube" && (
              <Tabs defaultValue="video" className="w-full" onValueChange={setSelectedTab}>
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="video" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    <span>Video (MP4)</span>
                  </TabsTrigger>
                  <TabsTrigger value="audio" className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    <span>Audio (MP3)</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="video" className="space-y-2">
                  {videoOptions.map((option, index) => (
                    <div
                      key={`video-${index}`}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="font-medium">{option.quality}</p>
                        <p className="text-sm text-gray-500">Size: {option.size}</p>
                      </div>
                      <Button
                        onClick={() => handleDownload(option.url, option.format)}
                        className="btn-glow btn-glow-purple"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download MP4
                      </Button>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="audio" className="space-y-2">
                  {audioOptions.map((option, index) => (
                    <div
                      key={`audio-${index}`}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="font-medium">Audio {option.quality}</p>
                        <p className="text-sm text-gray-500">Size: {option.size}</p>
                      </div>
                      <Button
                        onClick={() => handleDownload(option.url, option.format)}
                        className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white hover:opacity-90 border-0"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download MP3
                      </Button>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            )}

            {platform !== "YouTube" && (
              <div className="space-y-2">
                {downloadOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-medium">{option.quality}</p>
                      <p className="text-sm text-gray-500">Size: {option.size}</p>
                    </div>
                    <Button
                      onClick={() => handleDownload(option.url, option.format)}
                      className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white hover:opacity-90 border-0"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
