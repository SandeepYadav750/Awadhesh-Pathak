import { FaUsers, FaHandshake, FaMapMarkerAlt } from "react-icons/fa";
import { GiVote } from "react-icons/gi";

const stats = [
  {
    icon: <FaUsers />,
    number: "22+",
    title: "Years",
    subtitle: "साल का सार्वजनिक जीवन",
  },
  {
    icon: <FaHandshake />,
    number: "जनसेवा",
    title: "",
    subtitle: "हमारा संकल्प",
  },
  {
    icon: <GiVote />,
    number: "5 करोड़+",
    title: "",
    subtitle: "लोगों का विश्वास",
  },
  {
    icon: <FaMapMarkerAlt />,
    number: "शिवपुर, वाराणसी ",
    title: "",
    subtitle: "विधानसभा सीट से जुड़ाव",
  },
];

const StatsSection = () => {
  return (
    <section className="relative z-20 -mt-4 md:-mt-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center py-8 px-5 text-center
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r border-gray-200"
                      : ""
                  }
                  ${index < 2 ? "border-b lg:border-b-0 border-gray-200" : ""}
                `}
              >
                <div className="text-red-600 text-4xl mb-3">{item.icon}</div>

                <h2 className="text-4xl font-bold text-red-700">
                  <span className="flex items-end gap-2">
                    {item.number}{" "}
                    {item.title && (
                      <p className="font-semibold text-red-500 mt-1 text-base">
                        {item.title}
                      </p>
                    )}
                  </span>
                </h2>

                <p className="text-sm text-gray-600 mt-2 leading-6">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
