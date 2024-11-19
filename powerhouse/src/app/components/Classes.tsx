"use client";
import { useState } from "react";
import Image from "next/image";

export default function Classes() {
  const [activeFilter, setActiveFilter] = useState("all");

  const classes = [
    {
      image: "/images/class_1.png",
      title: "Body Building",
      time: "Mon-Fri | 9.00 - 10.00",
    },
    {
      image: "/images/class_2.png",
      title: "Body Building",
      time: "Mon-Fri | 9.00 - 10.00",
    },
    {
      image: "/images/class_3.png",
      title: "Body Building",
      time: "Mon-Fri | 9.00 - 10.00",
    },
    {
      image: "/images/class_4.png",
      title: "Body Building",
      time: "Mon-Fri | 9.00 - 10.00",
    },
  ];

  return (
    <section className="bg-[#F1F1F1] py-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Our Classes</h2>

          <ul className="flex space-x-8">
            <li>
              <a
                href="#filter-all"
                className={`text-xl font-medium pb-2 border-b-3 ${
                  activeFilter === "all"
                    ? "text-[#F92524] border-[#F92524]"
                    : "text-[#181818] border-transparent"
                } hover:text-[#F92524] hover:border-[#F92524]`}
                onClick={() => setActiveFilter("all")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#filter-men"
                className={`text-xl font-medium pb-2 border-b-3 ${
                  activeFilter === "men"
                    ? "text-[#F92524] border-[#F92524]"
                    : "text-[#181818] border-transparent"
                } hover:text-[#F92524] hover:border-[#F92524]`}
                onClick={() => setActiveFilter("men")}
              >
                Mens
              </a>
            </li>
            <li>
              <a
                href="#filter-Female"
                className={`text-xl font-medium pb-2 border-b-3 ${
                  activeFilter === "women"
                    ? "text-[#F92524] border-[#F92524]"
                    : "text-[#181818] border-transparent"
                } hover:text-[#F92524] hover:border-[#F92524]`}
                onClick={() => setActiveFilter("women")}
              >
                Womens
              </a>
            </li>
          </ul>
        </div>

        <p className="text-gray-600 mb-12">
          Phasellus volutpat ligula mauris, id rutrum quam efficitur non.
          Curabitur dapibus scelerisque est quis ullamcorper. Proin pretium et
          nulla ac gravida. Proin elementum nunc id est varius auctor id sit
          amet neque.
        </p>

        <div className="relative">
          <div className="flex justify-end space-x-4 mb-8">
            <button className="opacity-40">
              <Image
                src="/images/arrow_right_large.png"
                alt="Previous"
                width={40}
                height={40}
                className="transform scale-x-[-1]"
              />
            </button>
            <button>
              <Image
                src="/images/arrow_right_large.png"
                alt="Next"
                width={40}
                height={40}
              />
            </button>
          </div>

          <div className="overflow-hidden">
            <div className="flex space-x-8">
              {classes.map((classItem, index) => (
                <div
                  key={index}
                  className="relative w-[305px] h-[470px] rounded-tl-[40px] rounded-br-[40px] overflow-hidden group hover:shadow-[0px_0px_8px_#F92524]"
                >
                  <Image
                    src={classItem.image}
                    alt={classItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute w-full h-[100px] bg-[#F92524] text-white p-5 bottom-0 group-hover:bottom-10 transition-all duration-1000">
                    <h2 className="text-2xl font-medium mb-2">
                      {classItem.title}
                    </h2>
                    <p className="text-lg flex items-center">
                      <Image
                        src="/images/clock.png"
                        alt="clock"
                        width={15}
                        height={15}
                        className="mr-2"
                      />
                      {classItem.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
