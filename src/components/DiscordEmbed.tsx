
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Globe } from "lucide-react";

export const DiscordEmbed = () => {
  return (
    <Card className="w-full max-w-md border-0 glass-morphism overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle className="h-6 w-6 text-indigo-400" />
              <h3 className="font-bold">Join Our Discord</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Get help, updates and join our community of downloaders
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Zexo Downloader | 2.5k members</span>
            </div>
          </div>
          <div className="mt-2 p-3 bg-black/20 border-t border-white/5 flex justify-between">
            <span className="text-xs text-indigo-300">discord.gg/zexodownloader</span>
            <button className="text-xs text-indigo-300 hover:text-indigo-100 transition-colors">
              Join Server
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
