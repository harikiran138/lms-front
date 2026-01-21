'use client';

import React, { useRef, useEffect, useState } from 'react';
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
        const frameNum = (i + 1).toString().padStart(3, '0');
        img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
        img.onload = onIdxLoad;
        img.onerror = onIdxLoad; 
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!imagesLoaded || images.length === 0) return;

    const render = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const idx = Math.min(
            FRAME_COUNT - 1, 
            Math.max(0, Math.floor(frameIndex.get()))
        );
        
        const img = images[idx];
        if (!img) return;

        // HiDPI Scaling
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        // Scale context to match
        // Actually for drawImage with 'contain', we prefer to work with physical pixels for sharpness
        // But we need to account for dpr in our calculations
        
        // Maintain CSS size
        // canvas.style.width = '100%';
        // canvas.style.height = '100%';
        
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio); // Contain
        // Use Math.max(hRatio, vRatio) for Cover if preferred
        
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Optional: High quality image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.drawImage(img, 
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
        
        requestAnimationFrame(render);
    };

    const unsubscribe = frameIndex.on("change", () => {
       // Loop handles it
    });
    
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
  
  // Transform Y for parallax effect
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  if (!imagesLoaded) {
      return (
          <div className="h-screen w-full flex items-center justify-center bg-slate-950 text-white">
              <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                      <div className="w-16 h-16 border-4 border-cyan-500/10 border-t-cyan-500 rounded-full animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse" />
                      </div>
                  </div>
                  <p className="text-sm tracking-[0.2em] uppercase text-cyan-500 font-medium animate-pulse">
                      Initializing Neural Link...
                  </p>
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
            style={{ width: '100%', height: '100%' }}
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 pointer-events-none">
            
            {/* 1. HERO */}
            <motion.div 
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center z-10 p-6"
            >
                <div className="text-center p-12 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10 shadow-2xl shadow-cyan-900/20 max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 mb-6 drop-shadow-sm">
                        DEEP DIVE <br /> PROTOCOLS
                    </h1>
                    <div className="h-1 w-24 bg-cyan-500 mx-auto mb-6" />
                    <p className="text-xl md:text-2xl text-cyan-100/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                        Precision engineering meets autonomous underwater surveillance. 
                        Experience the unknown.
                    </p>
                </div>
            </motion.div>

            {/* 2. TRANSITION */}
            <motion.div 
                style={{ opacity: opacity2 }}
                className="absolute inset-0 flex items-center justify-start container mx-auto px-6 md:px-24 z-10"
            >
                 <div className="max-w-xl p-8 rounded-2xl bg-gradient-to-br from-black/60 to-black/20 backdrop-blur-md border-l-4 border-cyan-500">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Breaking <br/> the Surface
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Seamless amphibious transition capabilities allow for uninterrupted tactical awareness from seabed to sky.
                    </p>
                 </div>
            </motion.div>

            {/* 3. FLIGHT */}
            <motion.div 
                style={{ opacity: opacity3 }}
                className="absolute inset-0 flex items-center justify-end container mx-auto px-6 md:px-24 z-10"
            >
                 <div className="max-w-xl text-right p-8 rounded-2xl bg-gradient-to-bl from-black/60 to-black/20 backdrop-blur-md border-r-4 border-cyan-500">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Aerial <br/> Dominance
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        High-altitude reconnaissance systems deployed instantly. 
                        Zero latency. Total coverage.
                    </p>
                 </div>
            </motion.div>

            {/* 4. CTA */}
            <motion.div 
                style={{ opacity: opacity4 }}
                className="absolute inset-0 flex items-center justify-center z-10 p-6"
            >
                <div className="text-center">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 drop-shadow-2xl">
                        One Vehicle. <br/> Two Worlds.
                    </h2>
                    <button className="group pointer-events-auto relative px-10 py-5 bg-cyan-600 overflow-hidden rounded-full font-bold text-white tracking-widest shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:bg-cyan-500 active:scale-95">
                        <span className="relative z-10">EXPLORE SPECIFICATIONS</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <p className="mt-6 text-sm text-cyan-500/60 uppercase tracking-widest">
                        Limited Developer Units Available
                    </p>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
