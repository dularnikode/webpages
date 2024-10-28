import Image from "next/image";

const OurStory = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        {/* Left Container */}
        <div className="lg:flex">
          <div className="lg:w-5/12">
            <div className="bg-[url('/images/advanced_bg.png')] bg-center bg-no-repeat p-10 h-[587px]">
              <div className="bg-red-600/80 h-full text-center text-white p-6 relative">
                <h2 className="text-2xl font-medium relative pb-8 after:content-[''] after:absolute after:h-[35px] after:border-b-2 after:border-white after:left-4 after:right-4 after:bottom-0">
                  Advanced Gymnastics
                </h2>
                <p className="text-xl mt-5">
                  Donec dapibus malesuada nisl a sollicitudin. Nulla ut libero
                  felis. Aenean cursus rhoncus tempor. Phasellus a massa vitae
                  purus suscipit hendrerit vel a nisi.
                </p>
                <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-red-600 text-xl px-16 py-2 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="lg:w-7/12 lg:pl-12">
            <h2 className="text-3xl font-bold relative pb-4 after:content-[''] after:absolute after:w-24 after:border-b-4 after:border-red-600 after:left-0 after:bottom-0">
              Our Story
            </h2>
            <p className="text-lg my-8">
              Sed purus augue, consectetur ac sollicitudin ac, volutpat nec
              lorem. Cras vel porta augue, ac pretium leo. Curabitur tincidunt,
              felis sed auctor posuere, lorem augue gravida eros, ac ullamcorper
              leo quam eget eros. Quisque pulvinar mi in molestie scelerisque.
              Proin mattis molestie massa a maximus.
            </p>
            <p className="text-lg">
              Praesent eu placerat ipsum, in sollicitudin justo. Pellentesque
              mollis, nunc ac maximus aliquet, sapien justo vestibulum nisi,
              laoreet maximus nisi lacus quis lorem. Cras vel maximus leo
            </p>

            <div className="my-10 flex">
              <div className="w-[106px] h-[106px] border-2 border-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/man_icon.png"
                  alt="man-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="ml-8">
                <h2 className="text-2xl font-medium mb-2">Open Door Policy</h2>
                <p className="text-lg">
                  Maecenas tincidunt ornare iaculis. Nunc ut nibh nisi. Maecenas
                  nec magna ac diam tempor suscipit. In tempor, risus id pretium
                  vestibulum, tellus orci faucibus lorem,
                </p>
              </div>
            </div>

            <div className="my-10 flex">
              <div className="w-[106px] h-[106px] border-2 border-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/insured_icon.png"
                  alt="insured-icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="ml-8">
                <h2 className="text-2xl font-medium mb-2">Fully Insured</h2>
                <p className="text-lg">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Donec justo metus, dictum sit
                  amet eros ut, volutpat luctus tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
