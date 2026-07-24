"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const points = [
  "सामाजिक समरसता की स्थापना",
  "गुणवत्तापूर्ण शिक्षा और स्वास्थ्य",
  "किसानों और युवाओं का सशक्तिकरण",
  "महिलाओं के सम्मान और सुरक्षा के लिए प्रतिबद्ध",
];

const AboutSection = () => {
  return (
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}

          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <Image
              src="/awadeshPathakAbout.jpeg"
              alt="Awadhesh Pathak"
              width={700}
              height={450}
              className="w-full h-80 md:h-108 duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right Content */}

          <div>
            <span className="uppercase tracking-widest text-red-600 font-bold text-sm">
              About
            </span>

            <h2 className="text-5xl font-bold text-gray-900 mt-2">
              Awadhesh Pathak
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              जनता की सेवा मेरा सर्वोच्च धर्म है। मेरा उद्देश्य समाज के प्रत्येक
              वर्ग तक विकास, शिक्षा, स्वास्थ्य एवं सम्मान का लाभ पहुँचाना है। हम
              सब मिलकर एक समृद्ध और सशक्त भविष्य का निर्माण करेंगे।
            </p>

            <div className="mt-8 space-y-5">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <FaCheckCircle size={14} />
                  </div>

                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/aboutUs"
              className="mt-10 bg-red-600 hover:bg-red-700 duration-300 text-white px-8 py-4 rounded-lg flex items-center gap-3 font-semibold shadow-lg"
            >
              Read More About Awadhesh Pathak
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
