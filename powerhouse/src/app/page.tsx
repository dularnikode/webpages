export default function Home() {
  return (
    <>
      <section className="relative pt-24">
        <div className="bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48')] bg-cover bg-center h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-5xl font-bold mb-6">
                  Transform Your Body, Transform Your Life
                </h1>
                <p className="text-xl mb-8">
                  Join FitLife Gym and start your fitness journey today with our
                  state-of-the-art facilities and expert trainers.
                </p>
                <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
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
