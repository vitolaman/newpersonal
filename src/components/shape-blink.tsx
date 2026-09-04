import React, { useMemo, useState, useEffect } from "react";

type PixelShapeProps = {
  size?: number; // canvas size
  pixelSize?: number;
  density?: number; // fill density (0–1)
  blinkFraction?: number;
  blinkSpeed?: number;
};

// Utility for pixel rendering logic
function usePixelShape(
  shapePath: string,
  size: number,
  pixelSize: number,
  density: number,
  blinkFraction: number
) {
  return useMemo(() => {
    const cols = Math.floor(size / pixelSize);
    const rows = Math.floor(size / pixelSize);
    const base: { x: number; y: number; color: string }[] = [];
    const blinkable: { x: number; y: number }[] = [];

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return { basePixels: [], blinkablePixels: [] };

    ctx.fillStyle = "#000";
    const path2D = new Path2D(shapePath);
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
  }, [shapePath, size, pixelSize, density, blinkFraction]);
}

const PixelRenderer: React.FC<PixelShapeProps & { shapePath: string }> = ({
  shapePath,
  size = 400,
  pixelSize = 5,
  density = 0.7,
  blinkFraction = 0.1,
  blinkSpeed = 400,
}) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame((f) => f + 1), blinkSpeed);
    return () => clearInterval(interval);
  }, [blinkSpeed]);

  const { basePixels, blinkablePixels } = usePixelShape(
    shapePath,
    size,
    pixelSize,
    density,
    blinkFraction
  );

  const blinkingRects = useMemo(() => {
    const colors = ["#000080", "#6464FF", "#fff069"];
    return blinkablePixels
      .filter(() => Math.random() > 0.5)
      .map((p) => (
        <rect
          key={`blink-${frame}-${p.x}-${p.y}`}
          x={p.x * pixelSize}
          y={p.y * pixelSize}
          width={pixelSize}
          height={pixelSize}
          fill={colors[Math.floor(Math.random() * colors.length)]}
        />
      ));
  }, [frame, pixelSize, blinkablePixels]);

  return (
    <svg width={size} height={size} style={{ display: "block" }}>
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
      {blinkingRects}
    </svg>
  );
};

/* ---- SHAPE DEFINITIONS ---- */

// Heart shape path
const heartPath = (size: number) => {
  const r = size / 2.5; // bigger heart scale (adjust as needed)
  const offsetX = r; // push a bit right so it's fully visible
  const offsetY = r / 2;

  return `
    M ${offsetX} ${offsetY + r / 2}
    C ${offsetX + r} ${offsetY - r / 2}, ${offsetX + r * 2} ${
    offsetY + r
  }, ${offsetX} ${offsetY + r * 2}
    C ${offsetX - r * 2} ${offsetY + r}, ${offsetX - r} ${
    offsetY - r / 2
  }, ${offsetX} ${offsetY + r / 2}
    Z
  `;
};

// Diamond path
const diamondPath = (size: number) => {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;
  return `
    M ${cx} ${cy - r}
    L ${cx + r} ${cy}
    L ${cx} ${cy + r}
    L ${cx - r} ${cy}
    Z
  `;
};

// Circle path
const circlePath = (size: number) => {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2;
  return `M ${cx - r}, ${cy} A ${r},${r} 0 1,0 ${
    cx + r
  },${cy} A ${r},${r} 0 1,0 ${cx - r},${cy} Z`;
};

/* ---- COMPONENTS ---- */
export const PixelHeart: React.FC<PixelShapeProps> = (props) => (
  <PixelRenderer {...props} shapePath={heartPath(props.size ?? 400)} />
);

export const PixelDiamond: React.FC<PixelShapeProps> = (props) => (
  <PixelRenderer {...props} shapePath={diamondPath(props.size ?? 400)} />
);

export const PixelCircle: React.FC<PixelShapeProps> = (props) => (
  <PixelRenderer {...props} shapePath={circlePath(props.size ?? 400)} />
);
