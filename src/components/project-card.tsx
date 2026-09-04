import React from "react";
import { PixelCircle, PixelDiamond, PixelHeart } from "./shape-blink";
import PixelStar from "./twinkle-star";

type PixelCardProps = {
  shape: "heart" | "diamond" | "circle" | "star";
  title: string;
  desc: string;
  link: string;
};

const PixelCard: React.FC<PixelCardProps> = ({ shape, title, desc, link }) => {
  const ShapeComponent =
    shape === "heart"
      ? PixelHeart
      : shape === "diamond"
      ? PixelDiamond
      : shape === "star"
      ? PixelStar
      : PixelCircle;

  return (
    <div data-aos="fade-up">
      <div className="relative bg-white p-8 rounded-2xl md:w-[650px] h-[400px] overflow-hidden hover:scale-110 transition-all duration-200">
        {/* Title */}
        <h1 className="text-2xl my-4 md:my-6">{title}</h1>

        {/* Description + Link */}
        <div className="flex flex-col font-sans flex-1 h-[80%] justify-around z-50 relative">
          <p>{desc}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >
            Visit →
          </a>
        </div>

        {/* Pixel Shape */}
        <div className="absolute -bottom-12 -right-2 md:-bottom-12 md:-right-12 opacity-80">
          <ShapeComponent
            size={
              typeof window !== "undefined" && window.innerWidth < 768
                ? 100
                : 200
            }
            pixelSize={4}
            density={0.7}
            blinkFraction={0.5}
            blinkSpeed={300}
          />
        </div>
      </div>
    </div>
  );
};

export default PixelCard;
