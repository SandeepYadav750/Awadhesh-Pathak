"use client";

import {
  FaGraduationCap,
  FaHeartbeat,
  FaTractor,
  FaUsers,
  FaFemale,
  FaCity,
} from "react-icons/fa";

const initiatives = [
  {
    icon: <FaGraduationCap size={42} />,
    title: "शिक्षा",
    description: "सभी के लिए बेहतर शिक्षा",
  },
  {
    icon: <FaHeartbeat size={42} />,
    title: "स्वास्थ्य",
    description: "स्वस्थ समाज, सुरक्षित जीवन",
  },
  {
    icon: <FaTractor size={42} />,
    title: "किसान",
    description: "किसानों की आय, खेती की शान",
  },
  {
    icon: <FaUsers size={42} />,
    title: "युवा सशक्तिकरण",
    description: "रोजगार और अवसर",
  },
  {
    icon: <FaFemale size={42} />,
    title: "महिला सम्मान",
    description: "सुरक्षा, सम्मान, आत्मनिर्भरता",
  },
  {
    icon: <FaCity size={42} />,
    title: "विकास",
    description: "हर क्षेत्र में आधुनिक विकास",
  },
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="py-8 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="uppercase text-red-600 tracking-widest font-bold text-sm">
            Our Initiatives
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            हमारे प्रमुख संकल्प
          </h2>

          <div className="w-24 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-gray-200
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                duration-300
                cursor-pointer
                p-7
                text-center
              "
            >
              <div className="flex justify-center">
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-red-50
                    flex
                    items-center
                    justify-center
                    text-red-600
                    group-hover:bg-red-600
                    group-hover:text-white
                    duration-300
                  "
                >
                  {item.icon}
                </div>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              <div
                className="
                  mt-6
                  w-10
                  h-1
                  bg-red-600
                  rounded-full
                  mx-auto
                  group-hover:w-16
                  duration-300
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
