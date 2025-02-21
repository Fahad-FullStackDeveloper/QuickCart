import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Developer() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Meet the Developer
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 relative">
            <Image
              src="/path-to-developer-image.jpg" // Replace with your actual image path
              alt="Developer"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              John Doe
            </h2>
            <p className="text-gray-600 mb-4">
              John Doe is a passionate full-stack developer with expertise in
              Next.js, React, and Tailwind CSS. With over 5 years of experience
              in web development, John has created numerous successful
              e-commerce platforms and web applications.
            </p>
            <p className="text-gray-600 mb-4">
              As the lead developer of QuickCart, John is committed to
              delivering a high-quality, user-friendly shopping experience. His
              focus on performance optimization and clean code ensures that
              QuickCart runs smoothly and efficiently.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
