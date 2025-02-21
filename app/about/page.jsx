import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">About QuickCart</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-4">
              QuickCart is your one-stop destination for all your shopping needs. We offer a wide range of products from trusted sellers, ensuring quality and convenience for our customers.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to provide a seamless shopping experience, connecting buyers with the best products and sellers in the market. With QuickCart, you can shop with confidence, knowing that we prioritize customer satisfaction and product quality.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2023, QuickCart has quickly grown to become a leading e-commerce platform, serving thousands of happy customers across the globe.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/path-to-your-about-image.jpg" // Replace with your actual image path
              alt="About QuickCart"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}