"use client";

import Image from "next/image";
import { FaImages } from "react-icons/fa";

const galleryImages = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  image: `/gallery${index + 1}.jpeg`,
}));

const GalleryPage = () => {
  return (
    <>
      {/* Gallery */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="mt-3 text-4xl font-bold text-gray-900">यादगार पल</h2>
            <p className="mt-6 max-w-2xl mx-auto text-sm font-bold text-green-900">
              जनसेवा, सामुदायिक भागीदारी और यादगार कार्यक्रमों के पल।
            </p>
            <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  width={600}
                  height={450}
                  className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl mb-4">
                    <FaImages />
                  </div>

                  <h3 className="text-white text-xl font-semibold">
                    Gallery Image {item.id}
                  </h3>

                  <p className="text-gray-200 mt-2">Public Event</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
