import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Power House",
  description: "Transform Your Body, Transform Your Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header/Navigation */}
        <header className="bg-white text-black fixed w-full top-0 z-50 px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <a href="#home-page" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Logo"
              />
            </a>

            {/* Navigation and Button Container */}
            <div className="flex items-center space-x-8">
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#our-classes"
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      Our Classes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#our-trainer"
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      Our Trainer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="hover:text-yellow-400 transition duration-300"
                    >
                      Our Pricing
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="hidden md:block">
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
                  Contact Us
                </button>
              </div>

              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        {/* Footer  */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">FitLife Gym</h3>
                <p className="text-gray-400">
                  Transform your body and mind with our expert training
                  programs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-400">
                      Classes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-400">
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-yellow-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Hours</h4>
                <ul className="text-gray-400">
                  <li>Monday - Friday: 6am - 10pm</li>
                  <li>Saturday: 7am - 8pm</li>
                  <li>Sunday: 8am - 6pm</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact</h4>
                <ul className="text-gray-400">
                  <li>123 Fitness Street</li>
                  <li>New York, NY 10001</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@fitlifegym.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 FitLife Gym. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
