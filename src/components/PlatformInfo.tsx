
import { Youtube, Video, Image, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PlatformInfo = () => {
  // Organize in three lines (video platforms, music, image)
  const lineOne = [
    {
      name: "YouTube",
      icon: Youtube,
      description: "Download MP4 videos, Shorts, and Music in up to 4K",
      color: "text-red-500",
    },
    {
      name: "TikTok",
      icon: Video,
      description: "Download videos without watermark in high quality",
      color: "text-pink-500",
    },
  ];
  
  const lineTwo = [
    {
      name: "Spotify",
      icon: Music,
      description: "Download music and podcasts in high quality",
      color: "text-green-500",
    },
    {
      name: "Pinterest",
      icon: Image,
      description: "Download videos and photos in original quality",
      color: "text-red-600",
    },
  ];

  return (
    <div className="w-full max-w-4xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lineOne.map((platform) => (
          <Card key={platform.name} className="border-0 glass-morphism hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <platform.icon className={`h-5 w-5 ${platform.color}`} />
                {platform.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{platform.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lineTwo.map((platform) => (
          <Card key={platform.name} className="border-0 glass-morphism hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <platform.icon className={`h-5 w-5 ${platform.color}`} />
                {platform.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{platform.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
