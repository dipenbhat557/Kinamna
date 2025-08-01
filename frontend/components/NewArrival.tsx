"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    img: '/newImages/newArrival/ps5.png',
    title: 'PlayStation 5',
    desc: 'Black and White version of the PS5 coming out on sale.',
  },
  {
    img: '/newImages/newArrival/women.png',
    title: "Women's Collections",
    desc: 'Featured women collections that give you another vibe.',
  },
  {
    img: '/newImages/newArrival/speakers.png',
    title: 'Speakers',
    desc: 'Amazon wireless speakers',
  },
  {
    img: '/newImages/newArrival/perfume.png',
    title: 'Perfume',
    desc: 'GUCCI INTENSE OUD EDP',
  },
];

export const NewArrival = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(true);

  // Hide hint on scroll or tap
  const handleUserInteraction = () => {
    if (showHint) setShowHint(false);
  };

  return (
    <section className="w-full max-w-7xl mx-auto mt-8 mb-12 px-2 sm:px-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-6 bg-red-500 rounded mr-2" />
        <span className="text-xs text-red-500 font-semibold">Featured</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">New Arrival</h2>
      {/* Cards: slider on mobile, grid on md+ */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 md:overflow-x-visible relative"
        onScroll={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
      >
        {/* Left big card: aspect-square, spans 2 rows */}
        <div className="relative rounded-xl overflow-hidden aspect-square min-w-[260px] max-w-[320px] w-full row-span-2 col-span-1 group md:min-w-0 md:max-w-none">
          <Image src={cards[0].img} alt={cards[0].title} fill className="object-cover w-full h-full " unoptimized />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-6 flex flex-col gap-2 items-start justify-end h-full">
            <h3 className="text-xl font-bold text-white mb-1">{cards[0].title}</h3>
            <p className="text-sm text-white/90 mb-3">{cards[0].desc}</p>
            <Link href="/productslist" className="bg-white text-black px-4 py-1.5 rounded font-semibold w-max transition-transform duration-200 hover:scale-105">Shop Now</Link>
          </div>
        </div>
        {/* Top right card: spans 2 columns */}
        <div className="relative rounded-xl overflow-hidden min-h-[120px] min-w-[260px] max-w-[320px] w-full col-span-2 row-span-1 group md:min-w-0 md:max-w-none">
          <Image src={cards[1].img} alt={cards[1].title} fill className="object-cover w-full h-full" unoptimized  />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-6 flex flex-col gap-2 items-start justify-end h-full">
            <h3 className="text-lg font-bold text-white mb-1">{cards[1].title}</h3>
            <p className="text-xs text-white/90 mb-2">{cards[1].desc}</p>
            <Link href="/productslist" className="bg-white text-black px-3 py-1 rounded font-semibold w-max transition-transform duration-200 hover:scale-105 text-xs">Shop Now</Link>
          </div>
        </div>
        {/* Bottom right cards: Speakers - improved visibility */}
        <div className="relative rounded-xl overflow-hidden min-h-[120px] min-w-[260px] max-w-[320px] w-full col-span-1 row-span-1 group bg-gray-800 md:min-w-0 md:max-w-none">
          <Image src={cards[2].img} alt={cards[2].title} fill unoptimized className="object-contain object-center w-full h-full p-2" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 p-4 flex flex-col gap-1 items-start justify-end h-full">
            <h3 className="text-lg font-bold text-white mb-1">{cards[2].title}</h3>
            <p className="text-xs text-white/90 mb-2">{cards[2].desc}</p>
            <Link href="/productslist" className="bg-white text-black px-3 py-1 rounded font-semibold w-max transition-transform duration-200 hover:scale-105 text-xs">Shop Now</Link>
          </div>
        </div>
        {/* Bottom right cards: Perfume - improved visibility */}
        <div className="relative rounded-xl overflow-hidden min-h-[120px] min-w-[260px] max-w-[320px] w-full col-span-1 row-span-1 group bg-gray-800 md:min-w-0 md:max-w-none">
          <Image src={cards[3].img} alt={cards[3].title} unoptimized fill className="object-contain object-center w-full h-full p-2" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 p-4 flex flex-col gap-1 items-start justify-end h-full">
            <h3 className="text-lg font-bold text-white mb-1">{cards[3].title}</h3>
            <p className="text-xs text-white/90 mb-2">{cards[3].desc}</p>
            <Link href="/productslist" className="bg-white text-black px-3 py-1 rounded font-semibold w-max transition-transform duration-200 hover:scale-105 text-xs">Shop Now</Link>
          </div>
        </div>
        {/* Swipe hint overlay - only on mobile, only if showHint is true */}
        {showHint && (
          <div className="md:hidden pointer-events-none absolute bottom-2 right-4 z-20 flex items-center gap-1 bg-black/70 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-lg select-none">
            <span role="img" aria-label="hand">🖐️</span>
            <span>Swipe</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-4-4m4 4l-4 4" /></svg>
          </div>
        )}
      </div>
    </section>
  );
};
