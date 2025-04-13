
export const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm">
      <p className="text-gray-400">© {new Date().getFullYear()} Zexo Downloader. All rights reserved.</p>
      <p className="mt-1 text-gray-500">
        Download videos and images from YouTube, TikTok, Pinterest and Spotify.
      </p>
      <p className="mt-3 text-xs text-gray-600 flex items-center justify-center gap-1">
        <span>Made with</span>
        <span className="text-red-500">❤</span>
        <span>by Hiro.coder</span>
      </p>
    </footer>
  );
};
