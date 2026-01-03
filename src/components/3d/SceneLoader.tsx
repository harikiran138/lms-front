'use client';

import dynamic from 'next/dynamic';

const MainScene = dynamic(() => import('./MainScene'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#161012] -z-10" />
});

export default function SceneLoader() {
  return <MainScene />;
}
