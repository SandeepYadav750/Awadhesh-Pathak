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
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/banner1.jpeg",
    title: "एक आवाज़, एक विश्वास, लाखों का साथ।",
    subtitle: "सलामी देता नेता, उठता हर हाथ – बदलाव की नई उम्मीद के साथ।",
  },
  {
    id: 2,
    image: "/banner2.jpeg",
    title: "सांस्कृतिक धरोहर की साझेदारी।",
    subtitle: "अतीत के प्रेरणास्त्रोत के सामने, भविष्य की योजना का अनावरण।",
  },
  {
    id: 3,
    image: "/banner3.jpeg",
    title: "गाँव की मिट्टी, जनता का साथ।",
    subtitle: "स्थानीय लोगों के बीच नेतृत्व और विश्वास का अनूठा पल।",
  },
  {
    id: 4,
    image: "/banner4.jpeg",
    title: "खेतों की बात, नेता का संवाद।",
    subtitle:
      "ग्रामीण परिवेश में सरोकारों पर खुली चर्चा, बुनियादी मुद्दों की पहचान।",
  },
  {
    id: 5,
    image: "/banner5.jpeg",
    title: "कला का उत्सव, संस्कृति का सम्मान।",
    subtitle: "लोक कलाकारों को सम्मानित करता एक भव्य सांस्कृतिक संध्या।",
  },
];

const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
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

                <div className="absolute inset-0 flex items-center mt-0 md:mt-20">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl">
                      <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        People's Leader
                      </span>

                      <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        {slide.title}
                      </h1>

                      <p className="mt-3 text-lg text-gray-200 leading-8">
                        {slide.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-4">
                        <Link
                          href="/#joinUs"
                          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-semibold transition"
                        >
                          Join Us
                        </Link>

                        <Link
                          href="/aboutUs"
                          className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-white font-semibold transition"
                        >
                          Know More...
                        </Link>
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
