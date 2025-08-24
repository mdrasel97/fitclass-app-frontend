"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left: Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl text-white">Gym Scheduler</span>
            </div>
            <p className="text-sm text-gray-400">
              A smart way to manage your gym classes and memberships with ease.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-blue-400">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-blue-400">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="h-6 w-6 hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="h-6 w-6 hover:text-blue-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="h-6 w-6 hover:text-pink-500" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-6 w-6 hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gym Scheduler. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
