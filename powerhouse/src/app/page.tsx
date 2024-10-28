import Classes from "./components/Classes";
import HeroSection from "./components/HeroSection";
import OurStory from "./components/OurStory";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <Classes />
      <Pricing />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art fitness equipment for optimal results
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
