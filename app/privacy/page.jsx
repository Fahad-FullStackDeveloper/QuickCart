import React from "react";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Privacy Policy
        </h1>
        <div className="max-w-4xl space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600">
              Welcome to QuickCart's Privacy Policy. This policy describes how
              we collect, use, and protect your personal information when you
              use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>
                Personal information (e.g., name, email address, shipping
                address)
              </li>
              <li>Payment information</li>
              <li>Device and browser information</li>
              <li>Usage data and shopping preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600">We use your information to:</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Improve our services and user experience</li>
              <li>Communicate with you about your orders and our services</li>
              <li>Prevent fraud and enhance the security of our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Data Protection
            </h2>
            <p className="text-gray-600">
              We implement a variety of security measures to maintain the safety
              of your personal information. Your personal information is
              contained behind secured networks and is only accessible by a
              limited number of persons who have special access rights to such
              systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Third-Party Disclosure
            </h2>
            <p className="text-gray-600">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties unless we provide
              users with advance notice. This does not include website hosting
              partners and other parties who assist us in operating our website,
              conducting our business, or serving our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, correct, or delete your personal
              information. If you would like to exercise these rights, please
              contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              Email: privacy@quickcart.com
              <br />
              Address: 123 E-Commerce Street, Web City, 12345
            </p>
          </section>

          <p className="text-sm text-gray-500 italic">
            Last Updated: June 1, 2023
          </p>
        </div>
      </div>
    </>
  );
}
