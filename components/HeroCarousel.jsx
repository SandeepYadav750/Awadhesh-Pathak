"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1600/700?random=1",
    title: "Together We Build A Better Tomorrow",
    subtitle:
      "Dedicated to public service, development, transparency and creating opportunities for every citizen.",
  },
  {
    id: 2,
    image: "https://picsum.photos/1600/700?random=2",
    title: "Development With Trust",
    subtitle:
      "Working tirelessly for education, healthcare, employment and infrastructure.",
  },
  {
    id: 3,
    image: "https://picsum.photos/1600/700?random=3",
    title: "Your Voice, Our Commitment",
    subtitle:
      "Every citizen matters. Together we can create a stronger future.",
  },
  {
    id: 4,
    image: "https://picsum.photos/1600/700?random=4",
    title: "Join The Movement",
    subtitle:
      "Let's work together for progress, prosperity and social justice.",
  },
];

const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 40000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section className="relative">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-100 md:h-150 w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        People's Leader
                      </span>

                      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                        {slide.title}
                      </h1>

                      <p className="mt-6 text-lg text-gray-200 leading-8">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-8">
                        <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-semibold transition">
                          Join Us
                        </button>

                        <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-white font-semibold transition">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6 hidden md:flex" />
        <CarouselNext className="right-6 hidden md:flex" />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
