import { motion } from "framer-motion";
import { useState } from "react";
import { FadeInUp, ScaleIn } from "../AnimationWrapper";

interface YouTubeVideoProps {
  videoId?: string; // YouTube video ID (e.g., "dQw4w9WgXcQ" from "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  videoUrl?: string; // Full YouTube URL
  thumbnailUrl?: string; // Custom thumbnail URL (optional)
  title?: string;
  description?: string;
}

export default function YouTubeVideoSection({
  videoId,
  videoUrl,
  thumbnailUrl,
  title = "Watch Our Story",
  description = "Discover how we help businesses transform their ideas into thriving enterprises.",
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from URL if provided
  const getVideoId = () => {
    if (videoId) return videoId;
    if (videoUrl) {
      const match = videoUrl.match(
        /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
      );
      return match ? match[1] : null;
    }
    return null;
  };

  const extractedVideoId = getVideoId();

  // Generate thumbnail URL if not provided
  const getThumbnailUrl = () => {
    if (thumbnailUrl) return thumbnailUrl;
    if (extractedVideoId) {
      return `https://img.youtube.com/vi/${extractedVideoId}/maxresdefault.jpg`;
    }
    return null;
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!extractedVideoId) {
    return (
      <div className="general-padding py-12 md:py-20">
        <div className="text-center">
          <p className="text-red-500">
            Please provide a valid YouTube video ID or URL
          </p>
        </div>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${extractedVideoId}?rel=0`;
  const thumbnail = getThumbnailUrl();

  return (
    <div className="general-padding py-8 md:py-12 lg:py-16">
      <FadeInUp className="max-w-[35rem] mx-auto text-center mb-6 md:mb-8 lg:mb-10">
        <h3 className="section-heading">{title}</h3>
        {description && (
          <p className="max-xxmd:text-sm mt-3 md:mt-4 px-2">{description}</p>
        )}
      </FadeInUp>

      <ScaleIn delay={0.2} className="max-w-[70rem] mx-auto px-2 md:px-0">
        {!isPlaying ? (
          <motion.div
            className="relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
            onClick={handlePlay}
            style={{ aspectRatio: "16/9" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {thumbnail && (
              <motion.img
                src={thumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            )}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              {/* Play Button */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-16 h-16 mobile:w-20 mobile:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/90 dark:bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <svg
                    className="w-8 h-8 mobile:w-10 mobile:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary ml-0.5 mobile:ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 w-16 h-16 mobile:w-20 mobile:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/30 rounded-full opacity-75"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="rounded-xl md:rounded-2xl overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full min-h-[200px] md:min-h-[400px]"
            ></iframe>
          </motion.div>
        )}
      </ScaleIn>
    </div>
  );
}
