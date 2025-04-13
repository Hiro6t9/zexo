
import { ArrowRight, Clipboard, Download } from "lucide-react";

export const HowTo = () => {
  const steps = [
    {
      icon: Clipboard,
      title: "Copy URL",
      description: "Copy the video or image URL from YouTube, TikTok, or Pinterest"
    },
    {
      icon: ArrowRight,
      title: "Paste URL",
      description: "Paste the URL in the input field above"
    },
    {
      icon: Download,
      title: "Download",
      description: "Click download and select your preferred format and quality"
    }
  ];

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-semibold text-center mb-6">How To Download</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full zexo-gradient flex items-center justify-center mb-4">
              <step.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
