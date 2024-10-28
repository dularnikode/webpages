import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-[660px] p-0 bg-[url('/images/banner_bg.png')] bg-bottom bg-no-repeat bg-cover mt-[120px]">
      <div className="h-[660px] relative container mx-auto">
        <div className="w-1/2 absolute top-1/2 -translate-y-1/2 text-white">
          <h2 className="mb-5 font-light text-4xl">Build Your Body &</h2>
          <h2 className="text-5xl font-bold">Shape Yourself!</h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla
            mattis, ante nec euismod auctor, diam nulla auctor arcused ultrices
            ligula lla auctor arcused ultrices
          </p>
          <button className="bg-[#F92524] relative text-white rounded px-8 py-2.5 mt-2.5 pr-20 overflow-hidden group">
            Join Today
            <span className="absolute right-0 top-0 bottom-0 w-[50px] bg-[#E91B1A] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="absolute top-10 right-[385px]">
          <Image
            src="/images/banner_img_2.png"
            alt="Female athlete"
            width={300}
            height={500}
          />
        </div>

        <div className="absolute bottom-10 right-0">
          <Image
            src="/images/banner_img_1.png"
            alt="Male athlete"
            width={300}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
