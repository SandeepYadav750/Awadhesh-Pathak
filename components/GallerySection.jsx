"use client";

import Image from "next/image";
import Link from "next/link";
import { FaImages, FaArrowRight } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  },
];

const GallerySection = () => {
  return (
    <section className="py-8 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-red-600 uppercase font-bold tracking-[3px] text-sm">
            Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            यादें, जो हमारे संकल्प को मजबूत बनाती हैं
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Gallery */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt="Gallery"
                width={300}
                height={300}
                className="w-full h-52 object-cover duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 duration-300 flex items-end justify-center pb-6">
                <div className="text-white text-center">
                  <FaImages className="mx-auto text-3xl mb-2" />

                  <p className="font-semibold">View Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="flex justify-center mt-14">
          <Link
            href="/gallery"
            className="mt-10 bg-red-600 hover:bg-red-700 duration-300 text-white px-8 py-4 rounded-lg flex items-center gap-3 font-semibold shadow-lg"
          >
            View Full Gallery
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
