import React, { useMemo, useState, useEffect } from "react";

type PixelStarProps = {
  size?: number;       // canvas size
  pixelSize?: number;  // each pixel size
  points?: number;     // star points
  density?: number;    // base fill density (0–1)
  blinkFraction?: number; // fraction of pixels that blink
  blinkSpeed?: number; // ms interval for blinking
};

const PixelStar: React.FC<PixelStarProps> = ({
  size = 400,
  pixelSize = 5,
  points = 5,
  density = 0.7,
  blinkFraction = 0.1,
  blinkSpeed = 400,
}) => {
  const [frame, setFrame] = useState(0);

  // Animate blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => f + 1);
    }, blinkSpeed);
    return () => clearInterval(interval);
  }, [blinkSpeed]);

  // Star polygon path
  const starPath = useMemo(() => {
    const outerRadius = size / 2;
    const innerRadius = outerRadius / 2.5;
    const cx = size / 2;
    const cy = size / 2;

    let path = "";
    const step = Math.PI / points;

    for (let i = 0; i < 2 * points; i++) {
      const r = i % 2 === 0 ? outerRadius : innerRadius;
      const x = cx + r * Math.sin(i * step);
      const y = cy - r * Math.cos(i * step);
      path += `${i === 0 ? "M" : "L"}${x},${y}`;
    }
    path += "Z";
    return path;
  }, [size, points]);

  // Generate base + blinkable pixels
  const { basePixels, blinkablePixels } = useMemo(() => {
    const cols = Math.floor(size / pixelSize);
    const rows = Math.floor(size / pixelSize);
    const base: { x: number; y: number; color: string }[] = [];
    const blinkable: { x: number; y: number }[] = [];

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return { basePixels: [], blinkablePixels: [] };

    ctx.fillStyle = "#000080";
    const path2D = new Path2D(starPath);
    ctx.fill(path2D);

    const colors = ["#000080", "#6464FF"];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const pxX = x * pixelSize + pixelSize / 2;
        const pxY = y * pixelSize + pixelSize / 2;

        if (ctx.isPointInPath(path2D, pxX, pxY)) {
          if (Math.random() < density) {
            if (Math.random() < blinkFraction) {
              blinkable.push({ x, y });
            } else {
              const color = colors[Math.floor(Math.random() * colors.length)];
              base.push({ x, y, color });
            }
          }
        }
      }
    }
    return { basePixels: base, blinkablePixels: blinkable };
  }, [size, pixelSize, density, blinkFraction, starPath]);

  // Blinking pixels (color random each frame)
  const blinkingRects = useMemo(() => {
    const colors = ["#000080", "#6464FF", "#fff069"];
    return blinkablePixels
      .filter(() => Math.random() > 0.5) // randomly on/off
      .map((p) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <rect
            key={`blink-${frame}-${p.x}-${p.y}`}
            x={p.x * pixelSize}
            y={p.y * pixelSize}
            width={pixelSize}
            height={pixelSize}
            fill={color}
          />
        );
      });
  }, [frame, pixelSize, blinkablePixels]);

  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
    >
      {/* Base pixels (always on, random color) */}
      {basePixels.map((p, i) => (
        <rect
          key={`base-${i}`}
          x={p.x * pixelSize}
          y={p.y * pixelSize}
          width={pixelSize}
          height={pixelSize}
          fill={p.color}
        />
      ))}

      {/* Blinking pixels (random color each frame) */}
      {blinkingRects}
    </svg>
  );
};

export default PixelStar;
