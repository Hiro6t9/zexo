
import { Youtube, Video, Image } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const PlatformInfo = () => {
  const platforms = [
    {
      name: "YouTube",
      icon: Youtube,
      description: "Download MP4 videos, MP3 audio, Shorts, and Music",
      color: "text-red-500",
    },
    {
      name: "TikTok",
      icon: Video,
      description: "Download videos without watermark",
      color: "text-black dark:text-white",
    },
    {
      name: "Pinterest",
      icon: Image,
      description: "Download videos and photos without watermark",
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
      {platforms.map((platform) => (
        <Card key={platform.name} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <platform.icon className={`h-5 w-5 ${platform.color}`} />
              {platform.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{platform.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
