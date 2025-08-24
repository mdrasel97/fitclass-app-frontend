"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative bg-gray-900 h-full text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gym-banner.jpg" // আপনার public ফোল্ডারে gym-banner.jpg রাখবেন
          alt="Gym Banner"
          fill
          priority
          className="object-cover brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Transform Your <span className="text-blue-500">Body</span>, <br />
          Transform Your <span className="text-blue-400">Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Join our gym today and unlock your true potential with expert
          trainers, flexible classes, and world-class equipment.
        </p>
        <div className="flex space-x-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Join Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-gray-800"
          >
            View Classes
          </Button>
        </div>
      </div>
    </section>
  );
}
