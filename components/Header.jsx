"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Users } from "lucide-react";
import { useState } from "react";

const menus = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Initiatives",
    href: "/initiatives",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}

            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={60}
                height={60}
                className="object-contain"
              />

              <div>
                <h2 className="text-lg font-bold text-red-700">
                  Awadhesh Pathak
                </h2>

                <p className="text-sm text-gray-500">Samajwadi Party</p>
              </div>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.href}
                  className={`relative text-gray-700 font-medium hover:text-red-600 transition ${
                    index === 0 ? "text-red-600" : ""
                  }`}
                >
                  {menu.name}

                  {index === 0 && (
                    <span className="absolute -bottom-2 left-0 h-0.75 w-full rounded bg-red-600"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Join Button */}
            <div className="hidden lg:block">
              <button className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition">
                Join Us
                <Users size={18} />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="w-7 h-7 text-gray-700" />
              ) : (
                <Menu className="w-7 h-7 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-125" : "max-h-0"
          }`}
        >
          <div className="border-t bg-white shadow-lg">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setIsOpen(false)}
                className="block border-b px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-600"
              >
                {menu.name}
              </Link>
            ))}

            <div className="p-4">
              <button className="w-full rounded-full bg-red-600 py-3 text-white font-medium hover:bg-red-700 flex items-center justify-center gap-2">
                Join Us
                <Users size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
