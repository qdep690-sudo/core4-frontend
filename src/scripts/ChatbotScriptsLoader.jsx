import { useEffect } from "react";

const ChatbotScriptsLoader = () => {
  useEffect(() => {
    const scriptUrls = [
      "http://localhost:8000/static/js/chatbot.js",
      "http://localhost:8000/static/js/components/fertilizer-form.js",
      "http://localhost:8000/static/js/components/fertilizer-video.js",
      "http://localhost:8000/static/js/components/fertilizer-message.js",
      "http://localhost:8000/static/js/app.js",
    ];

    scriptUrls.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    });

    // Optional cleanup if needed
    return () => {
      scriptUrls.forEach(src => {
        const scriptTags = document.querySelectorAll(`script[src="${src}"]`);
        scriptTags.forEach(tag => tag.remove());
      });
    };
  }, []);

  return null;
};

export default ChatbotScriptsLoader;
