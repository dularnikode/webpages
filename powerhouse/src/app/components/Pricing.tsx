import Image from "next/image";

const Pricing = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>
        <p className="text-center text-lg mb-20">
          Maecenas vel eros non lorem faucibus semper.
          Curabitur laoreet id lorem rhoncus convallis.<br />
          Donec vestibulum tristique tellus, eu tristique mauris scelerisque id.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Basic Plan */}
          <div className="group">
            <div className="text-center p-12 border-3 border-[#7A839E] rounded-lg group-hover:border-[#F92524] transition-colors">
              <div>
                <Image
                  src="/images/dumbbells_1.png"
                  alt="dumbells"
                  width={80}
                  height={80}
                  className="mx-auto block group-hover:hidden"
                />
                <Image
                  src="/images/dumbbells_2.png"
                  alt="dumbells"
                  width={80}
                  height={80}
                  className="mx-auto hidden group-hover:block"
                />
              </div>
              <h4 className="text-2xl font-bold my-8">Basic Plan</h4>
              <p className="mb-5 pb-4 border-b border-[#7A839E]">
                Quisque vitae tempus urna, et maximus dolor malesuada mi sit amet, convallis mi
              </p>
              <h4 className="text-2xl font-bold my-8">$340/Month</h4>
              <button className="px-12 py-2 mt-16 border border-[#7A839E] text-lg text-[#181818] bg-white group-hover:bg-[#F92524] group-hover:text-white group-hover:border-[#F92524] transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="group">
            <div className="text-center p-12 border-3 border-[#7A839E] rounded-lg group-hover:border-[#F92524] transition-colors">
              <div>
                <Image
                  src="/images/dumbbells_1.png"
                  alt="dumbells"
                  width={80}
                  height={80}
                  className="mx-auto block group-hover:hidden"
                />
                <Image
                  src="/images/dumbbells_2.png"
                  alt="dumbells"
                  width={80}
                  height={80}
                  className="mx-auto hidden group-hover:block"
                />
              </div>
              <h4 className="text-2xl font-bold my-8">Professional Plan</h4>
              <p className="mb-5 pb-4 border-b border-[#7A839E]">
                Quisque vitae tempus urna, et maximus dolor malesuada mi sit amet, convallis mi
              </p>
              <h4 className="text-2xl font-bold my-8">$340/Month</h4>
              <button className="px-12 py-2 mt-16 border border-[#7A839E] text-lg text-[#181818] bg-white group-hover:bg-[#F92524] group-hover:text-white group-hover:border-[#F92524] transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="group">
            <div className="text-center p-12 border-3 border-[#7A839E] rounded-lg group-hover:border-[#F92524] transition-colors">
              <div>
                <Image
                  src="/images/dumbbells_1.png"
                  alt="dumbells"
                  width={80}
                  height={80}
                  className="mx-auto block group-hover:hidden"
                />
                <Image
                  src="/images/dumbbells_2.png"
                  alt="dumbells-red"
                  width={80}
                  height={80}
                  className="mx-auto hidden group-hover:block"
                />
              </div>
              <h4 className="text-2xl font-bold my-8">Standard Plan</h4>
              <p className="mb-5 pb-4 border-b border-[#7A839E]">
                Quisque vitae tempus urna, et maximus dolor malesuada mi sit amet, convallis mi
              </p>
              <h4 className="text-2xl font-bold my-8">$340/Month</h4>
              <button className="px-12 py-2 mt-16 border border-[#7A839E] text-lg text-[#181818] bg-white group-hover:bg-[#F92524] group-hover:text-white group-hover:border-[#F92524] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
