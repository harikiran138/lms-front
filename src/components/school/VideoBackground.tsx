'use client';

interface VideoBackgroundProps {
  opacity?: number;
  className?: string;
}

export default function VideoBackground({ opacity = 0.4, className = '' }: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden -z-10 bg-black ${className}`}>
      {/* Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ objectFit: 'cover', transform: 'scale(0.9)' }}
      >
        <source src="/1394254-uhd_4096_2160_24fps.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for Text Readability */}
      <div 
        className="absolute inset-0 bg-black/60"
        style={{ opacity }}
      />
      
      {/* Liquid Glass Overlay Effect */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-transparent via-black/10 to-black/30" />
    </div>
  );
}
