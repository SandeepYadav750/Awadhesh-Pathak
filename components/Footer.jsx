import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-gray-300">
      {/* ================= CTA SECTION ================= */}

      <div className="bg-[#b30000]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="uppercase tracking-[5px] text-red-100 font-semibold">
              Join Our Mission
            </span>

            <h2 className="text-2xl md:text-3xl font-extrabold text-white my-3 leading-tight">
              आइए, जुड़ें बदलाव की इस मुहिम से
            </h2>

            <p className="text-red-100 max-w-xl leading-7">
              जनसेवा, विकास और सम्मान के इस अभियान में आपका स्वागत है। आइए मिलकर
              एक मजबूत, सुरक्षित और समृद्ध समाज का निर्माण करें।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white rounded-md px-5 py-3 w-full lg:w-80 text-gray-700 outline-none"
            />

            <button className="bg-black hover:bg-gray-900 text-white px-4 md:px-8 py-4 rounded-md font-semibold transition">
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* LOGO */}

        <div>
          <div className="flex items-center gap-3">
            <Image src="/favicon.png" alt="logo" width={65} height={65} />

            <div>
              <h2 className="text-3xl font-bold text-white">Awadhesh Pathak</h2>

              <p className="text-red-500 font-medium">
                जनसेवा • विकास • विश्वास
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-gray-400">
            समाज के प्रत्येक नागरिक तक विकास, शिक्षा, रोजगार और सम्मान पहुँचाना
            हमारा संकल्प है। आइए, मिलकर एक नए उत्तर प्रदेश का निर्माण करें।
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/Awadheshpathakofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/awadheshpathakofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-pink-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/awadheshpathk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-black transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaTwitter />
            </a>

            <a
              href="https://wa.me/919739009767"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#252525] hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div>
          <h3 className="text-white text-2xl font-bold mb-6 relative">
            Quick Links
            <span className="absolute left-0 -bottom-2 w-14 h-1 bg-red-600 rounded"></span>
          </h3>

          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-red-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/aboutUs" className="hover:text-red-500 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-red-500 transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contactUs" className="hover:text-red-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* IMPORTANT LINKS */}

        <div>
          <h3 className="text-white text-2xl font-bold mb-6 relative">
            Important Links
            <span className="absolute left-0 -bottom-2 w-14 h-1 bg-red-600 rounded"></span>
          </h3>

          <ul className="space-y-4">
            <li>
              <Link
                href="/#initiatives"
                className="hover:text-red-500 transition duration-300"
              >
                Our Initiatives
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="hover:text-red-500 transition duration-300"
              >
                Join Campaign
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-red-500 transition duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}

        <div>
          <h3 className="text-white text-2xl font-bold mb-6 relative">
            Contact Us
            <span className="absolute left-0 -bottom-2 w-14 h-1 bg-red-600 rounded"></span>
          </h3>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>

              <div>
                <h4 className="text-white font-semibold">Office Address</h4>

                <p className="text-gray-400">Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <FaPhoneAlt className="text-white text-lg" />
              </div>

              <div>
                <h4 className="text-white font-semibold">Phone</h4>

                <a
                  href="tel:+919739009767"
                  className="text-gray-400 hover:text-red-400 transition"
                >
                  +91 97390 09767
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <FaWhatsapp className="text-white text-lg" />
              </div>

              <div>
                <h4 className="text-white font-semibold">WhatsApp</h4>

                <a
                  href="https://wa.me/919739009767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <FaEnvelope className="text-white text-lg" />
              </div>

              <div>
                <h4 className="text-white font-semibold">Email</h4>

                <a
                  href="mailto:admin@pulseconnect.in"
                  className="text-gray-400 hover:text-red-400 transition break-all"
                >
                  admin@pulseconnect.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-gray-800 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-5">
          <p className="text-gray-400 text-center lg:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-red-500 font-semibold">Awadhesh Pathak</span>.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="https://www.facebook.com/Awadheshpathakofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/awadheshpathakofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              Instagram
            </a>

            <a
              href="https://x.com/awadheshpathk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              X (Twitter)
            </a>

            <Link
              href="/privacy-policy"
              className="hover:text-red-500 transition"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-red-500 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
