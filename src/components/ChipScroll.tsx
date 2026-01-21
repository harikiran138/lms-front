'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const FRAME_COUNT = 40;

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
        img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
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
          <div className="h-screen w-full flex items-center justify-center bg-slate-950 text-white">
              <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
                  <p className="text-sm tracking-widest uppercase text-cyan-500">Initializing Drone Uplink...</p>
              </div>
          </div>
      );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-slate-950">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas 
            ref={canvasRef}
            className="w-full h-full object-contain"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Section 1: Underwater Start */}
            <motion.div 
                style={{ opacity: opacity1 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 mb-4 drop-shadow-2xl">
                        Deep Dive <br /> Protocols
                    </h1>
                    <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-wide drop-shadow-lg">
                        Autonomous Underwater Surveillance.
                    </p>
                </div>
            </motion.div>

            {/* Section 2: Transition (Left) */}
            <motion.div 
                style={{ opacity: opacity2 }}
                className="absolute inset-0 flex items-center justify-start container mx-auto px-6 md:px-24"
            >
                 <div className="max-w-lg">
                    <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-2 drop-shadow-lg">
                        Breaking the <br/> Surface.
                    </h2>
                    <p className="text-lg text-cyan-300/80 drop-shadow-md">
                        Seamless amphibious transition capabilities.
                    </p>
                 </div>
            </motion.div>

            {/* Section 3: Sky/Flight (Right) */}
            <motion.div 
                style={{ opacity: opacity3 }}
                className="absolute inset-0 flex items-center justify-end container mx-auto px-6 md:px-24"
            >
                 <div className="max-w-lg text-right">
                    <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-2 drop-shadow-lg">
                        Aerial <br/> Dominance.
                    </h2>
                    <p className="text-lg text-cyan-300/80 drop-shadow-md">
                        High-altitude reconnaissance from the deep.
                    </p>
                 </div>
            </motion.div>

             {/* Section 4: CTA (Center) */}
            <motion.div 
                style={{ opacity: opacity4 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-8 drop-shadow-2xl">
                        One Vehicle. <br/> Two Worlds.
                    </h2>
                    <button className="pointer-events-auto px-8 py-4 bg-cyan-600 text-white font-bold tracking-wide rounded-full hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/50">
                        EXPLORE SPECS
                    </button>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
