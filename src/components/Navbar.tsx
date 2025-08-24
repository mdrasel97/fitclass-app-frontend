"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Classes", path: "/classes" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo + Name */}
          <div className="flex items-center">
            <Image src="/logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
              width={16}
              height={14}
              />
            <span className="font-bold text-xl">Gym Scheduler</span>
          </div>

          {/* Middle: Routes (hidden in mobile) */}
          <div className="hidden md:flex space-x-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {route.name}
              </Link>
            ))}
          </div>

          {/* Right: Button */}
          <div className="hidden md:block">
            <Link href={'/auth/signIn'}><button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign In
            </button></Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.path}
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
