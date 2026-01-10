'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const FRAME_COUNT = 240;
const CANVAS_WIDTH = 1920; // Assuming standard 1080p aspect ratio source or similar
const CANVAS_HEIGHT = 1080;

export default function ChipScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Load images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];
    
    // We need to preserve order, so we pre-fill the array
    for (let i = 0; i < FRAME_COUNT; i++) {
        imgArray[i] = new Image();
    }

    const onIdxLoad = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
            setImages(imgArray);
            setImagesLoaded(true);
        }
    };

    imgArray.forEach((img, i) => {
        // Filename: ezgif-frame-001.jpg
        const frameNum = (i + 1).toString().padStart(3, '0');
        img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
        img.onload = onIdxLoad;
        // Handle error?
        img.onerror = onIdxLoad; // prevent stuck loading
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Render loop
  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;

    const render = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Calculate current frame
        const idx = Math.min(
            FRAME_COUNT - 1, 
            Math.max(0, Math.floor(frameIndex.get()))
        );
        
        const img = images[idx];
        if (!img) return;

        // Draw 'contain' logic
        // We want to fill the canvas or contain it? User said "Mobile scroll behavior... contain fit".
        // The canvas itself is h-screen w-full.
        // We should draw the image to cover or contain within the canvas dimensions.
        // Since the canvas resolution is fixed (or responsive?), let's make internal resolution fixed and scale via CSS.
        
        // Actually, best practice for sharp text/images:
        // Set canvas width/height to window innerWidth/Height * dpr.
        // But for video frames, fixed aspect ratio is usually better to avoid distortion.
        
        // Let's rely on the internal sizing being high res, and CSS scaling it.
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Draw image "contain"
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
        
        requestAnimationFrame(render);
    };

    const unsubscribe = frameIndex.on("change", () => {
        // Trigger render on change, but rAF loop is smoother for continuous updates
    });
    
    // Start loop
    let animationId = requestAnimationFrame(function loop(){
        render();
        animationId = requestAnimationFrame(loop);
    });

    return () => {
        unsubscribe();
        cancelAnimationFrame(animationId);
    };
  }, [imagesLoaded, images, frameIndex]);

  // Text Opacity Transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  // Loading Screen
  if (!imagesLoaded) {
      return (
          <div className="h-screen w-full flex items-center justify-center bg-white text-black">
              <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                  <p className="text-sm tracking-widest uppercase">Initializing NeuralCore...</p>
              </div>
          </div>
      );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas 
            ref={canvasRef}
            className="w-full h-full object-contain"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Section 1: Title */}
            <motion.div 
                style={{ opacity: opacity1 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black/90 mb-4">
                        NeuralCore X1
                    </h1>
                    <p className="text-xl md:text-2xl text-black/60 font-light tracking-wide">
                        The Future of AI.
                    </p>
                </div>
            </motion.div>

            {/* Section 2: Parameters (Left) */}
            <motion.div 
                style={{ opacity: opacity2 }}
                className="absolute inset-0 flex items-center justify-start container mx-auto px-6 md:px-24"
            >
                 <div className="max-w-lg">
                    <h2 className="text-4xl md:text-6xl font-bold text-black/90 mb-2">
                        256 Billion <br/> Parameters.
                    </h2>
                    <p className="text-lg text-black/60">
                        Unmatched density. Infinite possibility.
                    </p>
                 </div>
            </motion.div>

            {/* Section 3: Speed (Right) */}
            <motion.div 
                style={{ opacity: opacity3 }}
                className="absolute inset-0 flex items-center justify-end container mx-auto px-6 md:px-24"
            >
                 <div className="max-w-lg text-right">
                    <h2 className="text-4xl md:text-6xl font-bold text-black/90 mb-2">
                        Built for Speed. <br/> Designed for Scale.
                    </h2>
                    <p className="text-lg text-black/60">
                        Zero latency processing at the edge.
                    </p>
                 </div>
            </motion.div>

             {/* Section 4: CTA (Center) */}
            <motion.div 
                style={{ opacity: opacity4 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black/90 mb-8">
                        Power Your Next <br/> Breakthrough.
                    </h2>
                    <button className="pointer-events-auto px-8 py-4 bg-black text-white font-bold tracking-wide rounded-full hover:bg-gray-800 transition-colors">
                        ORDER DEVELOPER KIT
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
